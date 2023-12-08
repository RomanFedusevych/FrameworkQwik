/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      backgroundImage: {
        'uwpBcGround': "url('/images/web.svg')",
        'mainCircle': "url('/images/mainCircle.svg')",
        'modalBlock': "url('/images/modalBlock.svg')",
        'ai': "url('/images/ai.svg')",
        'down': "url('/images/down.svg')",
        'onButton': "url('/images/onButton.svg')",
        'UA': "url('/images/UA.svg')",
        "off": "url('/images/off.svg')",
        "up": "url('/images/up.svg')",
        "Paperclip": "url('/images/Paperclip.svg')",
        "buttom": "url('/images/buttom.svg')",
      },
      borderRadius: {
        '3xl': '24px',
      },
      boxShadow: {
        'custom-shadow': '0px 30px 30px 0px rgba(0, 0, 0, 0.40)',
      },
      borderColor: {
        'custom-border-color': '#9363FD',
      },
      colors: {
        customGray: '#171717',
        customButtonColor: '#9463FE',
        customColorForText: '#BD9FFE'
      },
    },
  },
  plugins: [],
}

