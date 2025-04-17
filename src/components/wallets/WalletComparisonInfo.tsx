
import { Server, Cpu } from "lucide-react";

const WalletComparisonInfo = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-12">
      <h2 className="text-2xl font-bold text-bitcoin-blue mb-4">Custodial vs. Non-custodial: Jaký je rozdíl?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Server className="h-5 w-5 mr-2 text-red-500" />
            Custodial peněženky
          </h3>
          <p className="text-gray-700 mb-3">
            U custodial peněženek spravuje vaše prostředky třetí strana. To znamená, že nemáte plnou kontrolu nad svými bitcoiny.
          </p>
          <div className="space-y-2">
            <p className="text-sm flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Výhody:</strong> Jednoduché používání, žádná správa záloh, okamžité platby</span>
            </p>
            <p className="text-sm flex items-start text-red-700">
              <span className="text-red-500 mr-2">✓</span>
              <span><strong>Nevýhody:</strong> "Not your keys, not your coins", riziko hacků, závislost na třetí straně</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Cpu className="h-5 w-5 mr-2 text-green-500" />
            Non-custodial peněženky
          </h3>
          <p className="text-gray-700 mb-3">
            U non-custodial peněženek máte plnou kontrolu nad svými bitcoiny. Pouze vy vlastníte privátní klíče.
          </p>
          <div className="space-y-2">
            <p className="text-sm flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Výhody:</strong> Plná kontrola, vyšší bezpečnost, větší soukromí</span>
            </p>
            <p className="text-sm flex items-start text-red-700">
              <span className="text-red-500 mr-2">✓</span>
              <span><strong>Nevýhody:</strong> Složitější použití, nutnost zálohování, větší zodpovědnost uživatele</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletComparisonInfo;
