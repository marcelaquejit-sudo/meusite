import React from "react";

export default function SiteFooter() {
  return (
    <footer className="relative bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <div className="silver-kinetic text-xl font-extrabold">MARCELA QUEJI</div>
            <p className="text-gray-500 mt-2 max-w-sm">Experiência digital com eficiência — o que há de mais atual aplicado para funcionar melhor.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-semibold text-gray-700 mb-2">Mapa</div>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#servicos" className="hover:text-gray-900">Serviços</a></li>
                <li><a href="#cases" className="hover:text-gray-900">Cases</a></li>
                <li><a href="#feedbacks" className="hover:text-gray-900">Feedbacks</a></li>
                <li><a href="#sobre" className="hover:text-gray-900">Sobre</a></li>
                <li><a href="#cta" className="hover:text-gray-900">Contato</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Contato</div>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#cta" className="hover:text-gray-900">Fale comigo</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Redes</div>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-400">© {new Date().getFullYear()} Marcela Queji. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
