const menuBtn: HTMLButtonElement | null = document.querySelector('.menu-btn');
const closeMenuBtn: HTMLButtonElement | null = document.querySelector('.close-menu-btn');
const navWrapper: HTMLDivElement | null = document.querySelector('.nav-module-wrapper');
const nav: HTMLDivElement | null = document.querySelector('.nav-module');
const workflowBtn: HTMLAnchorElement | null = document.querySelector('.workflow-dropdown-btn');
const workflowList: HTMLUListElement | null = document.querySelector('.workflow-ul');

menuBtn?.addEventListener('click', function(): void {
  navWrapper?.classList.add('show');
})

closeMenuBtn?.addEventListener('click', function(): void {
  navWrapper?.classList.remove('show');
})

navWrapper?.addEventListener('click', function(e): void {
  e?.stopPropagation();
  if ((e.target as HTMLElement)?.classList.contains('nav-module-wrapper')) {
    navWrapper?.classList.remove('show');
  }
})

workflowBtn?.addEventListener('click', function(): void {
  // workflowList?.classList.add('show');
  console.log('click')
})

