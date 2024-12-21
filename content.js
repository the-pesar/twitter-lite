;(() => {
  const normalFavicon = "https://abs.twimg.com/favicons/twitter.3.ico"

  function cleanTitle() {
    const titleEl = document.querySelector("title")
    const faviconEl = document.querySelector("link[rel='shortcut icon']")

    const regex = /\((\d+)\)\s/ // detect notif count in title

    if (regex.test(titleEl.innerText)) {
      const parts = titleEl.innerText.split(" ")
      parts.shift()
      titleEl.innerText = parts.join(" ")
    }

    if (faviconEl.href !== normalFavicon) {
      faviconEl.href = normalFavicon
    }
  }

  function cleanRightSidebar() {
    const container = document.querySelector(".css-175oi2r.r-vacyoi.r-ttdzmv")

    if (!container) return
    
    while (container?.children?.length > 3) {
      container.removeChild(container.lastElementChild)
    }

    container.lastElementChild.style.color = "#8b98a5"
    container.lastElementChild.style.fontFamily = "TwitterChirp"
    container.lastElementChild.style.textAlign = "center"
    container.lastElementChild.style.border = "none"

    container.lastElementChild.textContent = "Less is more."
  }

  function cleanNavbar() {
    const notifCountEl = document.querySelector(
      ".r-1m4drjs[aria-live='polite']"
    )
    const homeUpdateEl = document.querySelector(
      ".r-1ozsyd3[aria-label='undefined unread items']"
    )
    const postEl = document.querySelector(".css-175oi2r.r-l00any.r-e7q0ms")
    const premiumEl = document.querySelector("a[href='/i/premium_sign_up']")
    const verifiedEl = document.querySelector(
      "a[href='/i/verified-orgs-signup']"
    )
    const jobsEl = document.querySelector("a[href='/jobs']")
    const exploreEl = document.querySelector("a[href='/explore']")

    postEl?.remove()
    jobsEl?.remove()
    verifiedEl?.remove()
    premiumEl?.remove()
    notifCountEl?.remove()
    homeUpdateEl?.remove()
    exploreEl?.remove()
  }

  function cleanAds() {
    const elements = document.querySelectorAll(
      "span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3"
    )
    let adElement = Array.from(elements).filter(
      (el) => el.innerText === "Ad"
    )[0]

    if (!adElement) return

    while (adElement.classList.toString() !== "css-175oi2r") {
      adElement = adElement.parentElement
    }

    adElement.remove()
  }

  function cleanMessages() {
    const el = document.querySelector("div[data-testid='DMDrawer']")

    el?.remove()
  }

  cleanTitle()
  cleanRightSidebar()
  cleanNavbar()
  cleanAds()
  cleanMessages()

  setInterval(cleanTitle, 3000)

  const observer = new MutationObserver(() => {
    cleanTitle()
    cleanRightSidebar()
    cleanNavbar()
    cleanAds()
    cleanMessages()
  })

  const config = { childList: true, subtree: true }

  observer.observe(document.body, config)
})()
