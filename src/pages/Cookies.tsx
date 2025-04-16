
import PageLayout from "@/components/layout/PageLayout";

const Cookies = () => {
  return (
    <PageLayout>
      <div className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-bitcoin-blue mb-8">Zásady používání cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Tyto zásady vysvětlují, jak Bitcoin Akademie s.r.o. („my" nebo „Poskytovatel") používá cookies 
              a podobné technologie na webových stránkách Bitcoin Akademie.
            </p>
            
            <h2>1. Co jsou cookies</h2>
            <p>
              Cookies jsou malé textové soubory, které jsou ukládány do vašeho zařízení (počítač, tablet, mobilní telefon) 
              při návštěvě webových stránek. Cookies umožňují webové stránce rozpoznat vaše zařízení a zapamatovat si 
              určité informace o vaší návštěvě, například preferovaný jazyk, velikost písma a další nastavení. 
              To může usnadnit vaši příští návštěvu a zvýšit užitečnost webové stránky.
            </p>
            
            <h2>2. Jaké typy cookies používáme</h2>
            <p>
              Na našich webových stránkách používáme následující typy cookies:
            </p>
            
            <h3>2.1 Nezbytné cookies</h3>
            <p>
              Tyto cookies jsou nezbytné pro fungování našich webových stránek. Umožňují vám pohybovat se po webových 
              stránkách a využívat jejich funkce, jako je přístup do zabezpečených oblastí. Bez těchto cookies by 
              požadované služby nemohly být poskytovány.
            </p>
            
            <h3>2.2 Výkonnostní cookies</h3>
            <p>
              Tyto cookies shromažďují informace o tom, jak návštěvníci používají webové stránky, například které 
              stránky navštěvují nejčastěji a zda se jim zobrazují chybové zprávy. Tyto cookies neshromažďují informace, 
              které by identifikovaly návštěvníka. Veškeré informace, které tyto cookies shromažďují, jsou agregované 
              a anonymní. Používají se pouze ke zlepšení fungování webových stránek.
            </p>
            
            <h3>2.3 Funkční cookies</h3>
            <p>
              Tyto cookies umožňují webovým stránkám zapamatovat si volby, které jste učinili (například vaše 
              uživatelské jméno, jazyk nebo region, ve kterém se nacházíte), a poskytují vylepšené, 
              personalizované funkce. Tyto cookies mohou být také použity k zapamatování změn, které jste provedli 
              v velikosti textu, písma a dalších částech webových stránek, které si můžete přizpůsobit.
            </p>
            
            <h3>2.4 Cílené cookies</h3>
            <p>
              Tyto cookies zaznamenávají vaši návštěvu na našich webových stránkách, stránky, které jste navštívili, 
              a odkazy, které jste sledovali. Tyto informace používáme k tomu, abychom naše webové stránky a zobrazovanou 
              reklamu více přizpůsobili vašim zájmům. Za tímto účelem můžeme také sdílet tyto informace s třetími stranami.
            </p>
            
            <h2>3. Správa cookies</h2>
            <p>
              Většina webových prohlížečů automaticky přijímá cookies, ale vy můžete své nastavení prohlížeče změnit tak, 
              aby cookies odmítl nebo vás upozornil, když jsou cookies odeslány. Cookies můžete spravovat v nastavení 
              vašeho prohlížeče:
            </p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647?hl=cs" target="_blank" rel="noopener noreferrer" className="text-bitcoin-orange hover:text-bitcoin-blue">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener noreferrer" className="text-bitcoin-orange hover:text-bitcoin-blue">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/cs-cz/microsoft-edge/odstranění-souborů-cookie-v-prohlížeči-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-bitcoin-orange hover:text-bitcoin-blue">
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-bitcoin-orange hover:text-bitcoin-blue">
                  Safari
                </a>
              </li>
            </ul>
            <p>
              Upozorňujeme, že odmítnutí některých cookies může ovlivnit funkčnost našich webových stránek a váš 
              uživatelský zážitek.
            </p>
            
            <h2>4. Nástroje třetích stran</h2>
            <p>
              Na našich webových stránkách používáme následující analytické a marketingové nástroje třetích stran, 
              které mohou také využívat cookies:
            </p>
            <ul>
              <li>Google Analytics - pro analýzu návštěvnosti webových stránek</li>
              <li>Google AdSense - pro zobrazování relevantní reklamy</li>
              <li>Facebook Pixel - pro měření účinnosti reklamy a cílení na relevantní publikum</li>
            </ul>
            
            <h2>5. Změny zásad používání cookies</h2>
            <p>
              Vyhrazujeme si právo tyto zásady používání cookies kdykoli změnit. Jakékoli změny těchto zásad 
              budou zveřejněny na této stránce.
            </p>
            <p>
              Tyto zásady byly naposledy aktualizovány dne 1.1.2023.
            </p>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="italic">
                Pokud máte jakékoli dotazy týkající se našich zásad používání cookies, 
                kontaktujte nás na e-mailu: info@bitcoin-akademie.cz
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cookies;
