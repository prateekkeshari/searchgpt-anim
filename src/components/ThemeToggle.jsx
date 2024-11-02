import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 p-2 rounded-full
                 bg-white/50 dark:bg-black/50
                 hover:bg-white dark:hover:bg-black
                 backdrop-blur-sm
                 transition-colors duration-300"
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-white" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
} 