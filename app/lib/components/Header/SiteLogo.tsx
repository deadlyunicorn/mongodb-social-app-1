import { Neucha } from 'next/font/google'
import Link from 'next/link'


const neucha = Neucha({ subsets: ['latin'], weight: "400" })


export const SiteLogo = () => (

  <div className=" flex justify-center
  bg-opacity-80 backdrop-blur-md
  bg-neutral-800 p-2">
  <Link tabIndex={0} href="/" className='
  text-3xl group
  flex gap-x-3 text-yellow-200 hover:text-yellow-100'>

    <span className={neucha.className}>
      
        Social App 
        <span 
          className="
          text-sm absolute">
            v3</span>
        </span>

      <svg 
      className="w-8 h-8 group-hover:brightness-110" xmlns="http://www.w3.org/2000/svg" width="216.156" height="227.477" version="1.1" viewBox="0 0 57.191 60.187"     >       <g opacity="1" transform="translate(-76.404 -119.904)">         <g>           <g transform="rotate(35.985 105 148.5)">             <path fill="#083a42" strokeWidth="0.265" d="M133.596 148.5A28.596 28.596 0 01105 177.096 28.596 28.596 0 0176.404 148.5 28.596 28.596 0 01105 119.904a28.596 28.596 0 0128.596 28.596z" opacity="1"             ></path>             <g fill="#fed1aa" strokeWidth="0.265">               <path d="M98.134 127a17.248 16.054 54.015 00-.005 0 17.248 16.054 54.015 00-.17.027 17.248 16.054 54.015 00-.17.029 17.248 16.054 54.015 00-.17.03 17.248 16.054 54.015 00-.168.032 17.248 16.054 54.015 00-.001 0 17.248 16.054 54.015 00-.169.035 17.248 16.054 54.015 00-.168.035 17.248 16.054 54.015 00-.167.038 17.248 16.054 54.015 00-.168.04 17.248 16.054 54.015 00-.166.042 17.248 16.054 54.015 00-.167.043 17.248 16.054 54.015 00-.165.045 17.248 16.054 54.015 00-.165.047 17.248 16.054 54.015 00-.164.049 17.248 16.054 54.015 00-.164.05 17.248 16.054 54.015 00-.163.053 17.248 16.054 54.015 00-.162.054 17.248 16.054 54.015 00-.162.056 17.248 16.054 54.015 00-.16.058 17.248 16.054 54.015 00-.16.06 17.248 16.054 54.015 00-.001 0 17.248 16.054 54.015 00-.16.06 17.248 16.054 54.015 00-.158.064 17.248 16.054 54.015 00-.158.065 17.248 16.054 54.015 00-.157.067 17.248 16.054 54.015 00-.157.068 17.248 16.054 54.015 00-.155.07 17.248 16.054 54.015 00-.155.073 17.248 16.054 54.015 00-.153.073 17.248 16.054 54.015 00-.153.076 17.248 16.054 54.015 00-.152.076 17.248 16.054 54.015 00-.152.08 17.248 16.054 54.015 00-.15.08 17.248 16.054 54.015 00-.149.082 17.248 16.054 54.015 00-.147.084 17.248 16.054 54.015 00-.148.085 17.248 16.054 54.015 00-.147.087 17.248 16.054 54.015 00-.145.09 17.248 16.054 54.015 00-.144.09 17.248 16.054 54.015 00-.142.092 17.248 16.054 54.015 00-.143.094 17.248 16.054 54.015 00-.14.095 17.248 16.054 54.015 00-.14.096 17.248 16.054 54.015 00-.14.1 17.248 16.054 54.015 00-.105.076 17.248 16.054 54.015 00-.137.101 17.248 16.054 54.015 00-.135.103 17.248 16.054 54.015 00-.135.105 17.248 16.054 54.015 00-.133.105 17.248 16.054 54.015 00-.132.108 17.248 16.054 54.015 00-.13.109 17.248 16.054 54.015 00-.001 0 17.248 16.054 54.015 00-.13.11 17.248 16.054 54.015 00-.128.112 17.248 16.054 54.015 00-.127.113 17.248 16.054 54.015 00-.126.115 17.248 16.054 54.015 00-.124.116 17.248 16.054 54.015 00-.123.118 17.248 16.054 54.015 00-.122.119 17.248 16.054 54.015 00-.12.12 17.248 16.054 54.015 00-.12.122 17.248 16.054 54.015 00-.117.124 17.248 16.054 54.015 00-.117.125 17.248 16.054 54.015 00-.115.125 17.248 16.054 54.015 00-.113.127 17.248 16.054 54.015 00-.113.129 17.248 16.054 54.015 00-.11.13 17.248 16.054 54.015 00-.11.131 17.248 16.054 54.015 00-.108.132 17.248 16.054 54.015 00-.106.134 17.248 16.054 54.015 00-.105.135 17.248 16.054 54.015 00-.104.136 17.248 16.054 54.015 00-.102.138 17.248 16.054 54.015 00-.1.139 17.248 16.054 54.015 00-.1.14 17.248 16.054 54.015 00-.097.14 17.248 16.054 54.015 00-.095.142 17.248 16.054 54.015 00-.095.144 17.248 16.054 54.015 00-.093.144 17.248 16.054 54.015 00-.091.146 17.248 16.054 54.015 00-.09.146 17.248 16.054 54.015 00-.088.148 17.248 16.054 54.015 00-.086.149 17.248 16.054 54.015 00-.085.15 17.248 16.054 54.015 00-.083.15 17.248 16.054 54.015 00-.082.152 17.248 16.054 54.015 00-.08.153 17.248 16.054 54.015 00-.078.153 17.248 16.054 54.015 00-.077.155 17.248 16.054 54.015 00-.023.048 8.071 8.071 0 003.39.747 8.071 8.071 0 008.071-8.072 8.071 8.071 0 00-.07-1.062z" opacity="1"               ></path>               <path d="M90.201 128.055a17.248 16.054 54.015 00-.137.101 17.248 16.054 54.015 00-.136.103 17.248 16.054 54.015 00-.134.105 17.248 16.054 54.015 00-.133.105 17.248 16.054 54.015 00-.132.108 17.248 16.054 54.015 00-.13.109 17.248 16.054 54.015 00-.13.11 17.248 16.054 54.015 00-.129.112 17.248 16.054 54.015 00-.127.113 17.248 16.054 54.015 00-.125.115 17.248 16.054 54.015 00-.125.116 17.248 16.054 54.015 00-.123.118 17.248 16.054 54.015 00-.122.119 17.248 16.054 54.015 00-.12.12 17.248 16.054 54.015 00-.12.122 17.248 16.054 54.015 00-.117.124 17.248 16.054 54.015 00-.117.125 17.248 16.054 54.015 00-.115.125 17.248 16.054 54.015 00-.114.128 17.248 16.054 54.015 00-.111.128 17.248 16.054 54.015 00-.112.13 17.248 16.054 54.015 00-.109.13 17.248 16.054 54.015 00-.108.134 17.248 16.054 54.015 00-.106.133 17.248 16.054 54.015 00-.105.135 17.248 16.054 54.015 00-.103.136 17.248 16.054 54.015 00-.103.138 17.248 16.054 54.015 00-.1.138 17.248 16.054 54.015 00-.1.14 17.248 16.054 54.015 00-.097.141 17.248 16.054 54.015 00-.095.143 17.248 16.054 54.015 00-.095.143 17.248 16.054 54.015 00-.092.144 17.248 16.054 54.015 00-.092.146 17.248 16.054 54.015 00-.09.146 17.248 16.054 54.015 00-.088.148 17.248 16.054 54.015 00-.086.149 17.248 16.054 54.015 00-.085.15 17.248 16.054 54.015 00-.083.15 17.248 16.054 54.015 00-.082.152 17.248 16.054 54.015 00-.08.153 17.248 16.054 54.015 00-.078.153 17.248 16.054 54.015 00-.077.155 17.248 16.054 54.015 00-.074.156 17.248 16.054 54.015 00-.074.156 17.248 16.054 54.015 00-.071.158 17.248 16.054 54.015 00-.02.045 8.071 8.071 0 00.919.5 17.248 16.054 54.015 01.023-.048 17.248 16.054 54.015 01.076-.154 17.248 16.054 54.015 01.078-.154 17.248 16.054 54.015 01.08-.153 17.248 16.054 54.015 00.001 0 17.248 16.054 54.015 01.081-.152 17.248 16.054 54.015 01.083-.15 17.248 16.054 54.015 01.085-.15 17.248 16.054 54.015 01.087-.149 17.248 16.054 54.015 01.088-.148 17.248 16.054 54.015 01.09-.146 17.248 16.054 54.015 01.09-.145 17.248 16.054 54.015 01.093-.145 17.248 16.054 54.015 01.095-.143 17.248 16.054 54.015 01.096-.143 17.248 16.054 54.015 01.097-.14 17.248 16.054 54.015 01.1-.14 17.248 16.054 54.015 01.1-.139 17.248 16.054 54.015 01.102-.137 17.248 16.054 54.015 01.104-.136 17.248 16.054 54.015 01.105-.135 17.248 16.054 54.015 01.106-.134 17.248 16.054 54.015 01.108-.133 17.248 16.054 54.015 01.109-.13 17.248 16.054 54.015 000-.001 17.248 16.054 54.015 01.111-.13 17.248 16.054 54.015 01.112-.128 17.248 16.054 54.015 01.114-.128 17.248 16.054 54.015 01.115-.125 17.248 16.054 54.015 01.116-.125 17.248 16.054 54.015 01.118-.123 17.248 16.054 54.015 01.12-.122 17.248 16.054 54.015 01.12-.12 17.248 16.054 54.015 01.122-.12 17.248 16.054 54.015 01.123-.118 17.248 16.054 54.015 01.124-.116 17.248 16.054 54.015 01.126-.115 17.248 16.054 54.015 01.127-.113 17.248 16.054 54.015 01.128-.112 17.248 16.054 54.015 01.13-.11 17.248 16.054 54.015 01.13-.109 17.248 16.054 54.015 00.001 0 17.248 16.054 54.015 01.132-.107 17.248 16.054 54.015 01.132-.106 17.248 16.054 54.015 01.135-.104 17.248 16.054 54.015 01.136-.104 17.248 16.054 54.015 01.136-.1 17.248 16.054 54.015 01.107-.078 17.248 16.054 54.015 01.138-.098 17.248 16.054 54.015 01.14-.097 17.248 16.054 54.015 01.141-.095 17.248 16.054 54.015 01.142-.094 17.248 16.054 54.015 01.143-.092 17.248 16.054 54.015 01.144-.09 17.248 16.054 54.015 01.145-.09 17.248 16.054 54.015 01.146-.086 17.248 16.054 54.015 01.148-.086 17.248 16.054 54.015 01.148-.084 17.248 16.054 54.015 01.15-.082 17.248 16.054 54.015 01.15-.08 17.248 16.054 54.015 01.15-.079 17.248 16.054 54.015 01.152-.077 17.248 16.054 54.015 01.153-.076 17.248 16.054 54.015 01.154-.073 17.248 16.054 54.015 01.155-.072 17.248 16.054 54.015 01.155-.07 17.248 16.054 54.015 01.156-.069 17.248 16.054 54.015 01.157-.067 17.248 16.054 54.015 01.158-.064 17.248 16.054 54.015 00.001 0 17.248 16.054 54.015 01.158-.064 17.248 16.054 54.015 01.16-.061 17.248 16.054 54.015 01.16-.06 17.248 16.054 54.015 01.16-.058 17.248 16.054 54.015 01.162-.056 17.248 16.054 54.015 01.163-.053 17.248 16.054 54.015 01.163-.053 17.248 16.054 54.015 01.163-.051 17.248 16.054 54.015 01.165-.049 17.248 16.054 54.015 01.164-.047 17.248 16.054 54.015 00.001 0 17.248 16.054 54.015 01.165-.045 17.248 16.054 54.015 01.166-.043 17.248 16.054 54.015 01.167-.042 17.248 16.054 54.015 01.167-.04 17.248 16.054 54.015 01.168-.037 17.248 16.054 54.015 01.168-.036 17.248 16.054 54.015 01.169-.034 17.248 16.054 54.015 01.169-.033 17.248 16.054 54.015 01.17-.03 17.248 16.054 54.015 01.17-.028 17.248 16.054 54.015 01.17-.027 17.248 16.054 54.015 01.005-.001 8.071 8.071 0 00-.207-1.034 17.248 16.054 54.015 00-.159.02 17.248 16.054 54.015 00-.17.023 17.248 16.054 54.015 00-.171.025 17.248 16.054 54.015 00-.17.026 17.248 16.054 54.015 00-.17.029 17.248 16.054 54.015 00-.17.03 17.248 16.054 54.015 00-.17.032 17.248 16.054 54.015 00-.168.035 17.248 16.054 54.015 00-.168.036 17.248 16.054 54.015 00-.168.037 17.248 16.054 54.015 00-.168.04 17.248 16.054 54.015 00-.166.042 17.248 16.054 54.015 00-.166.043 17.248 16.054 54.015 00-.166.045 17.248 16.054 54.015 00-.165.047 17.248 16.054 54.015 00-.164.049 17.248 16.054 54.015 00-.164.05 17.248 16.054 54.015 00-.163.053 17.248 16.054 54.015 00-.162.054 17.248 16.054 54.015 00-.162.056 17.248 16.054 54.015 00-.16.058 17.248 16.054 54.015 00-.16.06 17.248 16.054 54.015 00-.16.061 17.248 16.054 54.015 00-.159.064 17.248 16.054 54.015 00-.158.064 17.248 16.054 54.015 00-.157.067 17.248 16.054 54.015 00-.156.068 17.248 16.054 54.015 00-.156.07 17.248 16.054 54.015 00-.154.073 17.248 16.054 54.015 00-.154.073 17.248 16.054 54.015 00-.153.076 17.248 16.054 54.015 00-.152.077 17.248 16.054 54.015 00-.151.078 17.248 16.054 54.015 00-.15.081 17.248 16.054 54.015 00-.149.082 17.248 16.054 54.015 00-.148.084 17.248 16.054 54.015 00-.148.086 17.248 16.054 54.015 00-.146.087 17.248 16.054 54.015 00-.145.088 17.248 16.054 54.015 00-.144.09 17.248 16.054 54.015 00-.143.093 17.248 16.054 54.015 00-.142.094 17.248 16.054 54.015 00-.141.095 17.248 16.054 54.015 00-.14.097 17.248 16.054 54.015 00-.138.098 17.248 16.054 54.015 00-.107.077z" opacity="1"               ></path>               <path d="M88.745 126.209a17.248 16.054 54.015 00-5.028 6.4 8.071 8.071 0 001.055.793 17.248 16.054 54.015 01.02-.045 17.248 16.054 54.015 01.071-.158 17.248 16.054 54.015 01.074-.156 17.248 16.054 54.015 01.075-.156 17.248 16.054 54.015 01.076-.155 17.248 16.054 54.015 01.078-.154 17.248 16.054 54.015 01.08-.152 17.248 16.054 54.015 01.082-.152 17.248 16.054 54.015 01.083-.15 17.248 16.054 54.015 01.085-.15 17.248 16.054 54.015 01.087-.15 17.248 16.054 54.015 01.088-.147 17.248 16.054 54.015 01.09-.146 17.248 16.054 54.015 01.09-.146 17.248 16.054 54.015 01.093-.144 17.248 16.054 54.015 01.095-.144 17.248 16.054 54.015 01.096-.142 17.248 16.054 54.015 01.097-.141 17.248 16.054 54.015 01.1-.14 17.248 16.054 54.015 01.1-.138 17.248 16.054 54.015 01.102-.138 17.248 16.054 54.015 01.104-.136 17.248 16.054 54.015 01.105-.135 17.248 16.054 54.015 01.106-.134 17.248 16.054 54.015 01.108-.132 17.248 16.054 54.015 01.109-.131 17.248 16.054 54.015 01.111-.13 17.248 16.054 54.015 01.112-.129 17.248 16.054 54.015 01.114-.127 17.248 16.054 54.015 01.115-.126 17.248 16.054 54.015 01.116-.124 17.248 16.054 54.015 01.118-.124 17.248 16.054 54.015 01.12-.121 17.248 16.054 54.015 01.12-.121 17.248 16.054 54.015 01.121-.12 17.248 16.054 54.015 01.124-.117 17.248 16.054 54.015 01.124-.116 17.248 16.054 54.015 01.126-.115 17.248 16.054 54.015 01.127-.114 17.248 16.054 54.015 01.128-.111 17.248 16.054 54.015 01.13-.11 17.248 16.054 54.015 01.13-.11 17.248 16.054 54.015 01.133-.107 17.248 16.054 54.015 01.132-.106 17.248 16.054 54.015 01.135-.104 17.248 16.054 54.015 01.136-.103 17.248 16.054 54.015 01.136-.101 17.248 16.054 54.015 01.107-.077 17.248 16.054 54.015 01.138-.099 17.248 16.054 54.015 01.14-.096 17.248 16.054 54.015 01.14-.096 17.248 16.054 54.015 01.143-.093 17.248 16.054 54.015 01.143-.093 17.248 16.054 54.015 01.144-.09 17.248 16.054 54.015 01.145-.089 17.248 16.054 54.015 01.146-.087 17.248 16.054 54.015 01.148-.085 17.248 16.054 54.015 01.148-.084 17.248 16.054 54.015 01.15-.082 17.248 16.054 54.015 01.149-.08 17.248 16.054 54.015 01.151-.08 17.248 16.054 54.015 01.152-.077 17.248 16.054 54.015 01.153-.075 17.248 16.054 54.015 01.154-.074 17.248 16.054 54.015 01.154-.072 17.248 16.054 54.015 01.156-.07 17.248 16.054 54.015 01.156-.068 17.248 16.054 54.015 01.157-.067 17.248 16.054 54.015 01.158-.065 17.248 16.054 54.015 01.159-.063 17.248 16.054 54.015 01.16-.062 17.248 16.054 54.015 01.16-.06 17.248 16.054 54.015 01.16-.057 17.248 16.054 54.015 01.162-.056 17.248 16.054 54.015 01.162-.054 17.248 16.054 54.015 01.163-.053 17.248 16.054 54.015 01.164-.05 17.248 16.054 54.015 01.164-.05 17.248 16.054 54.015 01.165-.046 17.248 16.054 54.015 01.166-.045 17.248 16.054 54.015 01.166-.044 17.248 16.054 54.015 01.166-.041 17.248 16.054 54.015 01.168-.04 17.248 16.054 54.015 01.168-.038 17.248 16.054 54.015 01.168-.036 17.248 16.054 54.015 01.168-.034 17.248 16.054 54.015 01.17-.032 17.248 16.054 54.015 01.17-.03 17.248 16.054 54.015 01.169-.029 17.248 16.054 54.015 01.17-.027 17.248 16.054 54.015 01.171-.025 17.248 16.054 54.015 01.171-.022 17.248 16.054 54.015 01.16-.02 8.071 8.071 0 00-.4-1.138 17.248 16.054 54.015 00-7.73 2.866z" opacity="1"               ></path>             </g>             <path fill="#13889b" strokeWidth="0.16" d="M116.611 147.686a12.202 12.202 0 01-12.202 12.202 12.202 12.202 0 01-12.203-12.202 12.202 12.202 0 0112.203-12.203 12.202 12.202 0 0112.202 12.203z" opacity="1"             ></path>             <path fill="#ffd556" strokeWidth="0.265" d="M99.347 164.78l12.812 5.988 9.702 4.534 1.671-1.168 1.143-.799-.924-10.669-1.22-14.09-11.592 8.102z"             ></path>             <g fill="#ffd556">               <path fillOpacity="1" strokeWidth="1" d="M155.738 135.771l-47.66-.86-49.78-.9a76.251 76.251 0 0096.427 2.56 76.251 76.251 0 001.013-.8z" opacity="1" transform="matrix(.2141 -.15546 .15546 .2141 65.06 142.163)"               ></path>               <g strokeWidth="0.265" transform="translate(-16.997 22.167)">                 <path d="M122.234 142.431a12.202 12.202 0 01-5.658-3.107 17.248 16.054 54.015 01-1.068-.314 17.248 16.054 54.015 01-5.312-2.843 17.248 16.054 54.015 01-.26-.205 17.248 16.054 54.015 01-6.316-18.222 17.248 16.054 54.015 01.757-2.255 8.071 8.071 0 01-1.059-1.143 20.175 20.175 0 00-1.97 4.559 20.175 20.175 0 006.994 21.6 20.175 20.175 0 00.31.235 20.175 20.175 0 006.398 3.191 20.175 20.175 0 003.984.741z" opacity="1"                 ></path>                 <path d="M116.377 104.86a8.071 8.071 0 01.759 1.36 17.248 16.054 54.015 016.525.79 17.248 16.054 54.015 0112.368 18.189 12.202 12.202 0 011.242 5.364 12.202 12.202 0 01-.083 1.417l2.981-2.083a20.175 20.175 0 00-13.795-24.697 20.175 20.175 0 00-9.997-.34z" opacity="1"                 ></path>               </g>               <path strokeWidth="0.106" d="M112.48 147.686a8.071 8.071 0 01-8.071 8.071 8.071 8.071 0 01-8.072-8.071 8.071 8.071 0 018.072-8.072 8.071 8.071 0 018.071 8.072z"               ></path>               <path strokeWidth="0.265" d="M99.347 164.78l12.812 5.988 9.702 4.534 1.671-1.168 1.143-.799-.924-10.669-1.22-14.09-11.592 8.102z"               ></path>             </g>             <g fill="#ffd556">               <path fillOpacity="1" strokeWidth="1" d="M155.738 135.771l-47.66-.86-49.78-.9a76.251 76.251 0 0096.427 2.56 76.251 76.251 0 001.013-.8z" opacity="1" transform="matrix(.2141 -.15546 .15546 .2141 65.06 142.163)"               ></path>               <g strokeWidth="0.265" transform="translate(-16.997 22.167)">                 <path d="M122.234 142.431a12.202 12.202 0 01-5.658-3.107 17.248 16.054 54.015 01-1.068-.314 17.248 16.054 54.015 01-5.312-2.843 17.248 16.054 54.015 01-.26-.205 17.248 16.054 54.015 01-6.316-18.222 17.248 16.054 54.015 01.757-2.255 8.071 8.071 0 01-1.059-1.143 20.175 20.175 0 00-1.97 4.559 20.175 20.175 0 006.994 21.6 20.175 20.175 0 00.31.235 20.175 20.175 0 006.398 3.191 20.175 20.175 0 003.984.741z" opacity="1"                 ></path>                 <path d="M116.377 104.86a8.071 8.071 0 01.759 1.36 17.248 16.054 54.015 016.525.79 17.248 16.054 54.015 0112.368 18.189 12.202 12.202 0 011.242 5.364 12.202 12.202 0 01-.083 1.417l2.981-2.083a20.175 20.175 0 00-13.795-24.697 20.175 20.175 0 00-9.997-.34z" opacity="1"                 ></path>               </g>               <path strokeWidth="0.106" d="M112.48 147.686a8.071 8.071 0 01-8.071 8.071 8.071 8.071 0 01-8.072-8.071 8.071 8.071 0 018.072-8.072 8.071 8.071 0 018.071 8.072z"               ></path>               <path strokeWidth="0.265" d="M99.347 164.78l12.812 5.988 9.702 4.534 1.671-1.168 1.143-.799-.924-10.669-1.22-14.09-11.592 8.102z"               ></path>             </g>           </g>         </g>       </g>     </svg>
    
  </Link>
  </div>

)
