import React, { useState } from 'react';
import { Package, TrendingUp, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeMenu: 'dashboard' | 'inventory';
  setActiveMenu: (menu: 'dashboard' | 'inventory') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (menu: 'dashboard' | 'inventory') => {
    setActiveMenu(menu);
    setIsOpen(false); // Cerrar el menú en móvil después de seleccionar
  };

  return (
    <>
      {/* Botón hamburguesa - solo visible en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para cerrar el menú en móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static
          inset-y-0 left-0
          w-64 bg-gray-900 text-white p-6
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <h1 className="text-2xl font-bold mb-8">Sistema EPP</h1>
        <nav className="space-y-2">
          <button
            onClick={() => handleMenuClick('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeMenu === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`}
          >
            <TrendingUp size={20} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => handleMenuClick('inventory')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              activeMenu === 'inventory' ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`}
          >
            <Package size={20} />
            <span>Inventario</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;