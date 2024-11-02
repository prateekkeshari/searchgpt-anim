import { useState } from 'react'
import { CgAttachment } from 'react-icons/cg'
import { ThemeToggle } from './components/ThemeToggle'
import { SearchButton } from './components/SearchButton'

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <div className="min-h-screen flex flex-col justify-center px-12 
                    bg-gradient-to-b from-gray-50 to-gray-100 
                    dark:from-black dark:to-black">
      <ThemeToggle />
      <div 
        className="max-w-xl mx-auto w-full 
                   bg-white/70 dark:bg-black/95
                   backdrop-blur-sm rounded-3xl 
                   shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)]
                   border border-gray-100/50 dark:border-white/10
                   p-7"
      >
        <h1 className="text-[#D1D1D1] dark:text-gray-400 text-lg mb-8 font-normal">
          Message ChatGPT
        </h1>

        <div className="flex items-center gap-4">
          <CgAttachment 
            className={`w-6 h-6 transition-colors duration-300
              ${isSearchActive 
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                : 'text-black dark:text-white cursor-pointer'}`}
          />
          <div onClick={() => setIsSearchActive(!isSearchActive)}>
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App