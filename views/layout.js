module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Shop</title>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/css/tailwind.css" />
        <link href="/css/main.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
      </head>

      <body class="tw-bg-background-1 !tw-m-0">
        <header>
          <nav class="navbar navbar-bottom !tw-fixed tw-bg-background-3 tw-top-0 tw-inset-x-0 tw-shadow-md">
            <div class="container navbar-container md-max:!tw-mx-0">
              <div class="tw-flex tw-justify-center md:tw-justify-start">
                <div class="tw-block md:tw-hidden tw-p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-full tw-h-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
                <ul class="tw-hidden md:tw-flex tw-gap-x-4 tw-p-0">
                  <li class="tw-flex tw-items-center">
                    Products
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6 tw-ml-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </li>
                  <li class="tw-flex tw-items-center">
                    About
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6 tw-ml-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </li>
                  <li class="tw-flex tw-items-center">
                    Contact
                  </li>
                </ul>
              </div>
              <div class="tw-p-4 tw-flex tw-w-full tw-justify-center tw-max-w-xs">
                <a href="/">
                  <img class="tw-w-full tw-h-auto tw-object-cover" src="/images/logo-header.png" alt="Carpathian logo" />
                </a>
              </div>
              <div class="navbar-item">
                <div class="navbar-buttons tw-justify-end tw-gap-x-6">
                  <div class="navbar-item">
                    <a href="/signup">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-md+ tw-h-md+">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </a>
                  </div>
                  <div class="navbar-item">
                    <a href="/cart">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-md+ tw-h-md+">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        ${content}
        <footer class="-tw-mx-sm -tw-mb-sm tw-bg-accent-forest tw-px-lg tw-py-md+">
          <div class="tw-flex md:tw-justify-center tw-justify-start tw-gap-x-32">
            <div class=" tw-text-background-3">
              <h3 class="tw-mb-sm">Products</h3>
              <ul>
                <li class="tw-mb-2">Mens</li>
                <li class="tw-mb-2">Womens</li>
                <li class="tw-mb-2">Footwear</li>
                <li class="tw-mb-2">Gear</li>
              </ul>
            </div>
            <div class=" tw-text-background-3">
              <h3 class="tw-mb-sm">About</h3>
              <ul>
                <li class="tw-mb-2">About Us</li>
                <li class="tw-mb-2">Our Values</li>
                <li class="tw-mb-2">Contact</li>
              </ul>
            </div>
            <div class="tw-text-background-3 tw-max-w-[14rem] tw-hidden md:tw-block">
              <a href="/">
                <img class="tw-w-full tw-h-auto tw-object-cover" src="/images/logo.png" alt="Carpathian logo" />
              </a>
            </div>
          </div>
          <div class="tw-text-background-3 tw-max-w-[22rem] md:tw-hidden tw-mx-auto">
            <a href="/">
              <img class="tw-w-full tw-h-auto tw-object-cover" src="/images/logo-header.png" alt="Carpathian logo" />
            </a>
          </div>
          <div class="tw-text-background-3">
          <h3 class="tw-mb-sm tw-text-center">Connect With Us</h3>
            <ul class="tw-flex tw-justify-center tw-gap-x-sm tw-mt-4">
              <li>
                <svg class="tw-h-16 tw-w-16" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5555 15.6166 11.872C14.7747 12.1989 14.0606 12.6363 13.3491 13.348C12.6371 14.0595 12.1997 14.7736 11.8717 15.6152C11.5544 16.4294 11.3384 17.3598 11.2771 18.7219C11.216 20.0873 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9114 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2253 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1283C16.4294 36.4448 17.3598 36.6605 18.7222 36.7229C20.0876 36.7851 20.5236 36.8003 23.9996 36.8003C27.4762 36.8003 27.9111 36.7851 29.2765 36.7229C30.6391 36.6605 31.5703 36.4448 32.3848 36.1283C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2253 36.128 32.3837C36.4427 31.5695 36.6587 30.6391 36.7227 29.277C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0876 36.7227 18.7222C36.6587 17.3595 36.4427 16.4294 36.128 15.6155C35.8 14.7736 35.3626 14.0595 34.6506 13.348C33.9386 12.636 33.2266 12.1987 32.384 11.872C31.5679 11.5555 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012Z" fill="#fff6f0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8529 13.5067C23.1937 13.5062 23.574 13.5067 24.0012 13.5067C27.4188 13.5067 27.8239 13.519 29.1735 13.5803C30.4215 13.6374 31.0989 13.8459 31.5501 14.0211C32.1474 14.2531 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4505C34.1541 16.9011 34.3629 17.5785 34.4197 18.8265C34.481 20.1758 34.4944 20.5812 34.4944 23.9972C34.4944 27.4132 34.481 27.8186 34.4197 29.1679C34.3626 30.4159 34.1541 31.0933 33.9789 31.5439C33.7469 32.1413 33.469 32.5666 33.021 33.0144C32.573 33.4624 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4128C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4128C17.5809 34.3552 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.4621 14.98 33.0141C14.532 32.5661 14.2547 32.1405 14.0222 31.5429C13.847 31.0922 13.6382 30.4149 13.5814 29.1669C13.52 27.8175 13.5078 27.4122 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8233C13.6384 17.5753 13.847 16.8979 14.0222 16.4467C14.2542 15.8494 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2494 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5755C20.0097 13.5222 20.4673 13.5062 22.8529 13.5035V13.5067ZM30.8338 15.632C29.9858 15.632 29.2978 16.3193 29.2978 17.1675C29.2978 18.0155 29.9858 18.7035 30.8338 18.7035C31.6818 18.7035 32.3698 18.0155 32.3698 17.1675C32.3698 16.3195 31.6818 15.632 30.8338 15.632ZM24.0012 17.4267C20.371 17.4267 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.37 27.6314 17.4267 24.0012 17.4267Z" fill="#fff6f0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6446 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6446 19.7334 24.0012 19.7334Z" fill="#fff6f0"/>
                </svg>
              </li>
              <li>
                <svg class="tw-h-16 tw-w-16" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM26.5016 38.1115V25.0542H30.1059L30.5836 20.5546H26.5016L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5016Z" fill="#fff6f0"/>
                </svg>
              </li>
              <li>
                <svg class="tw-h-16 tw-w-16" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8296 12.8897 19.7448 14.1488 21.0328C14.8203 21.7446 14.6692 21.8463 13.5109 21.4226C13.108 21.287 12.7554 21.1854 12.7219 21.2362C12.6044 21.3548 13.0073 22.8971 13.3262 23.5072C13.7627 24.3546 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0833C14.5349 26.0833 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7272 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9135 14.9546 31.3542 13.3766 31.3881C12.6211 31.405 12 31.4728 12 31.5237C12 31.6931 14.0481 32.6422 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.7609C28.5189 30.422 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2872C34.5288 17.7449 35.0492 17.1517 35.15 16.9822C35.3178 16.6602 35.3011 16.6602 34.4449 16.9483C33.018 17.4568 32.8165 17.389 33.5216 16.6263C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.762 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3891 23.1301 17.3551 23.2812 19.5075Z" fill="#fff6f0"/>
                </svg>
              </li>
            </ul>
          </div>
          <div class="tw-mt-md+ tw-hidden md:tw-block">
            <ul class="tw-flex tw-justify-center tw-gap-sm">
              <li>
                <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Terms and conditions</a>
                <span class="tw-px-1 !tw-text-base tw-text-neutral-400">|</span>
              </li>
              <li>
                <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Privacy policy</a>
                <span class="tw-px-1 !tw-text-base tw-text-neutral-400">|</span>
              </li>
              <li>
                <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Returns and exchanges</a>
                <span class="tw-px-1 !tw-text-base tw-text-neutral-400">|</span>
              </li>
              <li>
                <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Data protection</a>
              </li>
            </ul>
          </div>
        </footer>
        <div class="md:tw-hidden tw-w-full tw-bg-accent-brown tw-px-xs tw-py-3">
          <ul class="tw-flex">
            <li>
              <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Terms and conditions</a>
              <span class="tw-pr-1 !tw-text-base tw-text-neutral-400">|</span>
            </li>
            <li>
              <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Privacy policy</a>
              <span class="tw-pr-1 !tw-text-base tw-text-neutral-400">|</span>
            </li>
            <li>
              <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Returns and exchanges</a>
              <span class="tw-pr-1 !tw-text-base tw-text-neutral-400">|</span>
            </li>
            <li>
              <a class="tw-no-underline !tw-text-base tw-text-neutral-400" href="#">Data protection</a>
            </li>
          </ul>
        </div>
      </body>
    </html>
  `;
};
