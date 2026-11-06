/**
 * 가로 스크롤 슬라이드. 영상, 팬아트 섹션이 같이 쓴다.
 *
 * 마크업 약속
 * - [data-slider]            바깥 상자. data-autoplay="5000" 이 있으면 그 간격(ms)으로 자동으로 넘긴다.
 * - [data-track]             가로로 스크롤되는 줄. 자식 하나가 슬라이드 하나다.
 * - [data-prev] [data-next]  이전, 다음 버튼
 * - [data-dots]              페이지 점이 들어갈 자리
 * - [data-auto]              (자동 넘김일 때) 끄기/켜기 버튼
 *
 * 한 페이지에 다 들어가면 바깥 상자에 data-single 이 붙고, CSS 에서 버튼을 숨긴다.
 */
export function initSliders() {
  document.querySelectorAll<HTMLElement>('[data-slider]:not([data-ready])').forEach(setup);
}

function setup(slider: HTMLElement) {
  slider.setAttribute('data-ready', '');
  const track = slider.querySelector<HTMLElement>('[data-track]')!;
  const prev = slider.querySelector<HTMLButtonElement>('[data-prev]')!;
  const next = slider.querySelector<HTMLButtonElement>('[data-next]')!;
  const dotsBox = slider.querySelector<HTMLElement>('[data-dots]')!;
  const slides = Array.from(track.children) as HTMLElement[];

  const gap = () => parseFloat(getComputedStyle(track).columnGap) || 0;
  const slideW = () => slides[0]?.offsetWidth ?? track.clientWidth;
  const perView = () => Math.max(1, Math.round((track.clientWidth + gap()) / (slideW() + gap())));
  const pageWidth = () => perView() * (slideW() + gap());
  const pageCount = () => Math.ceil(slides.length / perView());
  const current = () => Math.round(track.scrollLeft / pageWidth());
  const atEnd = () => track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;

  const goTo = (page: number) => {
    const max = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: Math.max(0, Math.min(max, page * pageWidth())), behavior: 'smooth' });
  };

  let dots: HTMLButtonElement[] = [];
  const update = () => {
    const page = atEnd() ? pageCount() - 1 : current();
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = atEnd();
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === page)));
  };
  const buildDots = () => {
    dotsBox.innerHTML = '';
    dots = Array.from({ length: pageCount() }, (_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'dot';
      b.setAttribute('aria-label', `${i + 1}번째 페이지`);
      b.addEventListener('click', () => goTo(i));
      dotsBox.appendChild(b);
      return b;
    });
    slider.toggleAttribute('data-single', track.scrollWidth <= track.clientWidth + 2);
    update();
  };

  // 자동 넘김: 마우스를 올리거나 키보드로 들어가 있을 때, 안에서 영상을 재생 중일 때,
  // 화면 밖에 있을 때, 탭이 가려져 있을 때는 멈춘다. 마지막 다음은 처음으로 돌아간다.
  const interval = Number(slider.dataset.autoplay) || 0;
  const autoBtn = slider.querySelector<HTMLButtonElement>('[data-auto]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let autoOn = interval > 0 && !reduced;
  let hovering = false;
  let focused = false;
  let visible = false;
  let timer: number | undefined;

  const canRun = () =>
    autoOn &&
    !hovering &&
    !focused &&
    visible &&
    !document.hidden &&
    pageCount() > 1 &&
    !track.querySelector('iframe');
  const schedule = () => {
    window.clearTimeout(timer);
    if (!canRun()) return;
    timer = window.setTimeout(() => {
      goTo(atEnd() ? 0 : current() + 1);
      schedule();
    }, interval);
  };

  if (interval > 0) {
    const paintAuto = () => {
      if (!autoBtn) return;
      autoBtn.setAttribute('aria-pressed', String(autoOn));
      autoBtn.textContent = autoOn ? '자동 넘김 끄기' : '자동 넘김 켜기';
    };
    autoBtn?.addEventListener('click', () => {
      autoOn = !autoOn;
      paintAuto();
      schedule();
    });
    slider.addEventListener('pointerenter', () => ((hovering = true), schedule()));
    slider.addEventListener('pointerleave', () => ((hovering = false), schedule()));
    slider.addEventListener('focusin', () => ((focused = true), schedule()));
    slider.addEventListener('focusout', (e) => {
      if (!slider.contains(e.relatedTarget as Node)) {
        focused = false;
        schedule();
      }
    });
    track.addEventListener('click', () => window.setTimeout(schedule, 0));
    document.addEventListener('visibilitychange', schedule);
    new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { threshold: 0.4 }
    ).observe(slider);
    paintAuto();
  } else {
    autoBtn?.remove();
  }

  prev.addEventListener('click', () => (goTo(current() - 1), schedule()));
  next.addEventListener('click', () => (goTo(current() + 1), schedule()));
  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next.click();
    if (e.key === 'ArrowLeft') prev.click();
  });
  window.addEventListener('resize', buildDots);
  buildDots();
}
