import { motion } from 'framer-motion'
import { LuGlobe } from 'react-icons/lu'
import { useState } from 'react'

export function SearchButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.button
      className="group flex items-center bg-transparent 
                 hover:bg-[rgb(2_133_255/0.05)] dark:hover:bg-[rgb(2_133_255/0.15)]
                 rounded-full overflow-hidden transition-colors duration-300"
      initial={{ width: isExpanded ? '110px' : '40px' }}
      animate={{ width: isExpanded ? '110px' : '40px' }}
      onClick={() => setIsExpanded(!isExpanded)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center">
        <div className="p-2">
          <motion.div
            initial={{ scale: 0.7, rotateZ: 25, rotate: 0 }}
            animate={{ 
              scale: 1,
              rotateZ: 0,
              rotate: 360
            }}
            transition={{ 
              duration: 2.0,
              ease: [0.34, 1.56, 0.64, 1],
              rotate: { duration: 2.0, ease: "easeInOut" }
            }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <LuGlobe 
              className={`w-6 h-6 transition-all duration-300 
                ${isExpanded 
                  ? 'text-[rgb(2_133_255)]' 
                  : 'text-black dark:text-white group-hover:text-[rgb(2_133_255)]'
                }`} 
            />
          </motion.div>
        </div>
        
        <span 
          className={`text-[rgb(2_133_255)] whitespace-nowrap transition-all duration-300 font-semibold
            ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
        >
          Search
        </span>
      </div>
    </motion.button>
  )
} 