
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <PageLayout>
      <div className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-bitcoin-blue mb-8">Zásady ochrany osobních údajů</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Tyto zásady ochrany osobních údajů („Zásady") vysvětlují, jakým způsobem společnost Bitcoin Akademie s.r.o., 
              IČO: 123 45 678, se sídlem Bitcoinová 123, 110 00 Praha („my" nebo „Poskytovatel") zpracovává osobní údaje 
              uživatelů webových stránek Bitcoin Akademie („Vy" nebo „Uživatel").
            </p>
            
            <h2>1. Jaké osobní údaje zpracováváme</h2>
            <p>
              1.1 Při registraci a využívání služeb Bitcoin Akademie zpracováváme následující kategorie osobních údajů:
            </p>
            <ul>
              <li>Identifikační údaje (jméno, příjmení)</li>
              <li>Kontaktní údaje (e-mail, telefon)</li>
              <li>Přihlašovací údaje (uživatelské jméno, heslo v zašifrované podobě)</li>
              <li>Údaje o využívání služeb (historie kurzů, platební historie)</li>
              <li>Technické údaje (IP adresa, cookies, typ zařízení a prohlížeče)</li>
            </ul>
            
            <h2>2. Účel a právní základ zpracování</h2>
            <p>
              2.1 Vaše osobní údaje zpracováváme pro následující účely a na základě těchto právních základů:
            </p>
            <ul>
              <li>
                <strong>Poskytování služeb a plnění smlouvy</strong> - zpracování je nezbytné pro poskytování 
                vzdělávacích služeb a plnění smlouvy mezi Vámi a námi
              </li>
              <li>
                <strong>Zákonné povinnosti</strong> - zpracování je nezbytné pro splnění našich zákonných povinností 
                (např. účetní a daňové povinnosti)
              </li>
              <li>
                <strong>Oprávněné zájmy</strong> - zpracování je nezbytné pro účely našich oprávněných zájmů 
                (např. zlepšování služeb, zabezpečení webových stránek, analýza návštěvnosti)
              </li>
              <li>
                <strong>Souhlas</strong> - v některých případech zpracováváme Vaše osobní údaje na základě Vašeho souhlasu 
                (např. pro marketingové účely)
              </li>
            </ul>
            
            <h2>3. Doba uchovávání údajů</h2>
            <p>
              3.1 Vaše osobní údaje uchováváme pouze po dobu nezbytnou k naplnění účelů uvedených v těchto Zásadách, 
              nejdéle však:
            </p>
            <ul>
              <li>Po dobu trvání Vašeho uživatelského účtu a následně po dobu 3 let od jeho zrušení</li>
              <li>Po dobu stanovenou příslušnými právními předpisy (zejména pro účetní a daňové doklady)</li>
              <li>Po dobu trvání Vašeho souhlasu (pokud je zpracování založeno na souhlasu)</li>
            </ul>
            
            <h2>4. Příjemci osobních údajů</h2>
            <p>
              4.1 Vaše osobní údaje můžeme sdílet s následujícími kategoriemi příjemců:
            </p>
            <ul>
              <li>Poskytovatelé služeb (např. poskytovatelé hostingu, platebních služeb, analytických nástrojů)</li>
              <li>Orgány veřejné moci (pokud to vyžaduje zákon)</li>
            </ul>
            <p>
              4.2 Všichni příjemci jsou vázáni povinností mlčenlivosti a zpracovávají osobní údaje pouze 
              na základě našich pokynů nebo pro splnění svých zákonných povinností.
            </p>
            
            <h2>5. Vaše práva</h2>
            <p>
              5.1 V souvislosti se zpracováním Vašich osobních údajů máte následující práva:
            </p>
            <ul>
              <li>Právo na přístup k osobním údajům</li>
              <li>Právo na opravu nepřesných údajů</li>
              <li>Právo na výmaz (právo být zapomenut)</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo na přenositelnost údajů</li>
              <li>Právo vznést námitku proti zpracování</li>
              <li>Právo odvolat souhlas se zpracováním</li>
              <li>Právo podat stížnost u dozorového úřadu</li>
            </ul>
            <p>
              5.2 Pro uplatnění těchto práv nás kontaktujte na e-mailu: gdpr@bitcoin-akademie.cz
            </p>
            
            <h2>6. Cookies a analytické nástroje</h2>
            <p>
              6.1 Naše webové stránky používají cookies a podobné technologie pro zlepšení uživatelského zážitku, 
              analýzu návštěvnosti a personalizaci obsahu.
            </p>
            <p>
              6.2 Podrobné informace o používání cookies naleznete v samostatném dokumentu 
              <Link to="/cookies" className="text-bitcoin-orange hover:text-bitcoin-blue"> Zásady používání cookies</Link>.
            </p>
            
            <h2>7. Zabezpečení údajů</h2>
            <p>
              7.1 Implementujeme vhodná technická a organizační opatření k zajištění úrovně zabezpečení odpovídající riziku, 
              včetně šifrování, pravidelných aktualizací systémů a omezení přístupu k osobním údajům.
            </p>
            
            <h2>8. Změny zásad ochrany osobních údajů</h2>
            <p>
              8.1 Tyto Zásady můžeme čas od času aktualizovat. O významných změnách Vás budeme informovat 
              zveřejněním nového znění na našich webových stránkách nebo e-mailem.
            </p>
            <p>
              8.2 Tyto Zásady byly naposledy aktualizovány dne 1.1.2023.
            </p>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="italic">
                Pokud máte jakékoli dotazy týkající se zpracování Vašich osobních údajů, 
                kontaktujte nás na e-mailu: gdpr@bitcoin-akademie.cz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
