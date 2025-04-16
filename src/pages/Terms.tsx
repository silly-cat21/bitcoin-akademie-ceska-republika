
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <PageLayout>
      <div className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-bitcoin-blue mb-8">Obchodní podmínky</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Tyto obchodní podmínky („Podmínky") upravují právní vztah mezi společností Bitcoin Akademie s.r.o., 
              IČO: 123 45 678, se sídlem Bitcoinová 123, 110 00 Praha („Poskytovatel") a osobami, 
              které využívají služby poskytované Poskytovatelem prostřednictvím webových stránek 
              Bitcoin Akademie („Uživatel" nebo „Vy").
            </p>
            
            <h2>1. Úvodní ustanovení</h2>
            <p>
              1.1 Poskytovatel provozuje vzdělávací platformu Bitcoin Akademie zaměřenou na poskytování 
              vzdělávacích materiálů a kurzů v oblasti Bitcoinu a kryptoměn.
            </p>
            <p>
              1.2 Tyto Podmínky upravují práva a povinnosti Poskytovatele a Uživatelů při využívání služeb 
              Bitcoin Akademie, včetně bezplatných i placených kurzů a nástrojů.
            </p>
            <p>
              1.3 Používáním webových stránek Bitcoin Akademie vyjadřujete souhlas s těmito Podmínkami. 
              Pokud s Podmínkami nesouhlasíte, nejste oprávněni služby Bitcoin Akademie využívat.
            </p>
            
            <h2>2. Registrace a uživatelský účet</h2>
            <p>
              2.1 Pro plný přístup ke službám Bitcoin Akademie je nutná registrace a vytvoření uživatelského účtu.
            </p>
            <p>
              2.2 Při registraci jste povinni uvádět pravdivé a úplné údaje a tyto údaje v případě změny aktualizovat.
            </p>
            <p>
              2.3 Jste povinni chránit své přihlašovací údaje před zneužitím a neposkytnout je třetím osobám. 
              Odpovídáte za veškeré aktivity provedené pod Vaším uživatelským účtem.
            </p>
            <p>
              2.4 Poskytovatel má právo zrušit Váš uživatelský účet v případě porušení těchto Podmínek nebo 
              dlouhodobé neaktivity.
            </p>
            
            <h2>3. Vzdělávací obsah a kurzy</h2>
            <p>
              3.1 Bitcoin Akademie nabízí různé typy vzdělávacího obsahu, včetně bezplatných i placených kurzů, 
              článků, videí a dalších materiálů.
            </p>
            <p>
              3.2 Bezplatný obsah může být kdykoli změněn, omezen nebo zpoplatněn bez předchozího upozornění.
            </p>
            <p>
              3.3 Pro přístup k placeným kurzům je nutné uhradit příslušný poplatek podle aktuálního ceníku. 
              Ceny jsou uvedeny včetně všech daní a poplatků.
            </p>
            <p>
              3.4 Poskytovatel uděluje Uživateli nevýhradní, nepřenosnou licenci k užití vzdělávacího obsahu 
              výhradně pro Vaše osobní vzdělávací účely. Není dovoleno obsah jakkoliv šířit, upravovat, 
              kopírovat nebo používat pro komerční účely bez výslovného souhlasu Poskytovatele.
            </p>
            
            <h2>4. Platební podmínky</h2>
            <p>
              4.1 Platby za prémiové služby lze provést způsoby uvedenými na webových stránkách, 
              včetně platby v Bitcoinu.
            </p>
            <p>
              4.2 Při platbě v Bitcoinu je rozhodující částka v CZK podle aktuálního kurzu v okamžiku 
              provedení platby.
            </p>
            <p>
              4.3 Poskytovatel vystaví Uživateli daňový doklad po přijetí platby.
            </p>
            
            <h2>5. Odstoupení od smlouvy</h2>
            <p>
              5.1 Uživatel, který je spotřebitelem, má právo odstoupit od smlouvy ve lhůtě 14 dnů od jejího uzavření 
              bez udání důvodu.
            </p>
            <p>
              5.2 Právo na odstoupení od smlouvy nelze uplatnit u smluv na dodání digitálního obsahu, 
              pokud byl obsah dodán s předchozím výslovným souhlasem Uživatele před uplynutím lhůty pro odstoupení 
              od smlouvy.
            </p>
            <p>
              5.3 Pro odstoupení od smlouvy je nutné zaslat oznámení na e-mail: info@bitcoin-akademie.cz.
            </p>
            
            <h2>6. Odpovědnost a záruky</h2>
            <p>
              6.1 Informace poskytované v rámci Bitcoin Akademie mají pouze vzdělávací a informativní charakter 
              a nepředstavují investiční, finanční, právní ani daňové poradenství.
            </p>
            <p>
              6.2 Poskytovatel nenese odpovědnost za jakékoli investiční nebo jiné rozhodnutí, 
              které Uživatel učiní na základě informací získaných prostřednictvím Bitcoin Akademie.
            </p>
            <p>
              6.3 Poskytovatel vynakládá přiměřené úsilí, aby zajistil správnost a aktuálnost poskytovaných 
              informací, ale neposkytuje žádné záruky ohledně jejich úplnosti, přesnosti nebo vhodnosti 
              pro konkrétní účely.
            </p>
            
            <h2>7. Ochrana osobních údajů</h2>
            <p>
              7.1 Informace o zpracování osobních údajů jsou uvedeny v samostatném dokumentu 
              <Link to="/soukromi" className="text-bitcoin-orange hover:text-bitcoin-blue"> Zásady ochrany osobních údajů</Link>.
            </p>
            
            <h2>8. Závěrečná ustanovení</h2>
            <p>
              8.1 Tyto Podmínky se řídí právním řádem České republiky.
            </p>
            <p>
              8.2 Poskytovatel je oprávněn tyto Podmínky jednostranně měnit. O změně bude Uživatele informovat 
              zveřejněním nového znění na webových stránkách nebo e-mailem.
            </p>
            <p>
              8.3 Tyto Podmínky nabývají účinnosti dne 1.1.2023.
            </p>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="italic">
                V případě jakýchkoli dotazů nás můžete kontaktovat na e-mailové adrese info@bitcoin-akademie.cz
                nebo telefonicky na čísle +420 123 456 789.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
