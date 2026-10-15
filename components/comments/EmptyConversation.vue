<template>
  <div class="flex flex-col items-center justify-center px-4 text-center">
    <svg class="w-full max-w-[220px]" viewBox="0 0 240 160" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="conversation-ground" x1="120" y1="70" x2="120" y2="160" gradientUnits="userSpaceOnUse">
          <stop stop-color="#656767" />
          <stop offset="1" stop-color="#131313" />
        </linearGradient>
        <linearGradient id="conversation-bubble" x1="128" y1="65" x2="156" y2="111" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f0f2f3" /><stop offset="1" stop-color="#9b9e9f" />
        </linearGradient>
      </defs>
      <path d="M10 156C29 99 69 75 120 75C171 75 211 101 230 156H10Z" fill="url(#conversation-ground)" />
      <path d="M76 46C76 28 91 16 111 16C134 16 148 29 148 46C148 65 135 76 115 76H98L80 84L84 66C79 61 76 54 76 46Z" fill="#b4b9bc" />
      <g fill="#e3e7e9"><circle cx="96" cy="44" r="4.5"/><circle cx="113" cy="44" r="4.5"/><circle cx="130" cy="44" r="4.5"/></g>
      <path d="M114 67C114 57 123 51 135 51C147 51 156 58 156 68C156 74 153 79 148 82L151 90L139 85H135C123 85 114 78 114 67Z" fill="url(#conversation-bubble)" />
      <g fill="#f4f5f5"><circle cx="125" cy="66" r="2.5"/><circle cx="135" cy="66" r="2.5"/><circle cx="145" cy="66" r="2.5"/></g>
      <ellipse cx="116" cy="103" rx="20" ry="2.5" fill="#c9cdce"/>
      <path d="M54 102L53 80L57 95L60 77L60 102Z" fill="#c9cdce"/>
      <path d="M180 104V118" stroke="#c9cdce" stroke-width="2"/><path d="M173 99C176 83 183 83 187 99C189 106 171 106 173 99Z" fill="#c9cdce"/>
      <path d="M164 33C180 52 186 30 176 31C165 33 176 45 188 49" stroke="#006b4b" stroke-width="1.5"/>
    </svg>
    <p class="mt-3 text-[16px] text-[#979b9c]">No conversation at the moment</p>
  </div>
</template>
