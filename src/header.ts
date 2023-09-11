const menuBtn: HTMLButtonElement | null = document.querySelector('.menu-btn');
const closeMenuBtn: HTMLButtonElement | null = document.querySelector('.close-menu-btn');
const navWrapper: HTMLDivElement | null = document.querySelector('.nav-module-wrapper');
const nav: HTMLDivElement | null = document.querySelector('.nav-module');
const workflowBtn: HTMLAnchorElement | null = document.querySelector('.workflow-dropdown-btn');
const workflowList: HTMLUListElement | null = document.querySelector('.workflow-ul');
const popups: NodeListOf<HTMLElement> | null = document.querySelectorAll('.popup');
const currencyBtn: HTMLDivElement | null = document.querySelector('.current-currency-btn');
const currencyContainer: HTMLDivElement | null = document.querySelector('.currency-picker-container');
const currencyItems: HTMLDivElement[] | null = Array.from(document.querySelectorAll('.currency-item'));
const selectedCurrency: HTMLParagraphElement | null = document.querySelector('.selected-currency');

menuBtn?.addEventListener('click', function(): void {
  toggleElement(navWrapper)
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

workflowBtn?.addEventListener('click', function(e): void {
  e.preventDefault();
  toggleElement(workflowList);
})

currencyBtn?.addEventListener('click', function(): void {
  // if (currencyContainer?.className.includes('show')) 
  toggleElement(currencyContainer);
})

for (const currencyItem of currencyItems) {
  currencyItem.addEventListener('click', function(): void {
    const newCurrency = currencyItem.innerText.split(/\n/).shift();
    if (selectedCurrency) {
      selectedCurrency.innerText = newCurrency;
    }
  })
}

window.addEventListener('click', ({target}) => {
  const popup = (target as HTMLElement).closest('.popup');
  const clickedOnClosedPopup = popup && !popup.classList.contains('show');
  if ((target as HTMLElement).className.includes('workflow-dropdown-btn') || (target as HTMLDivElement).className.includes('current-currency-btn')) return;
  Array.from(popups).forEach(p => p.classList.remove('show'));
  if (clickedOnClosedPopup) popup.classList.add('show');
})

function toggleElement(element: any): void {
  element.classList.toggle('show');
}




