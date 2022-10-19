import ScrollSuave from'./modules/scroll-suave.js';
import initAnimacaoScroll from'./modules/scroll-animacao.js';
import Accordion from'./modules/accordion.js';
import TabNav from'./modules/tabnav.js';
import initModal from'./modules/modal.js';
import initTooltip from'./modules/tooltip.js';
import initDropdowMenu from'./modules/dropdown-menu.js';
import initMenuMobile from'./modules/menu-mobile.js';
import initFuncionamento from'./modules/funcionamento.js';
import initFetchAnimais from'./modules/fetch-animais.js';
import initFetchBitcoin from'./modules/fetch-bitcoin.js';



const scrollsuave = new ScrollSuave('[data-menu="sauve"] a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section')
tabNav.init();
  
   initAnimacaoScroll();
   initModal();
   initTooltip();
   initDropdowMenu();
   initMenuMobile();
   initFuncionamento();
   initFetchAnimais();
   initFetchBitcoin();

   
