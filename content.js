;(() => {
  const normalFavicon = "https://abs.twimg.com/favicons/twitter.3.ico"

  function cleanTitle() {
    const titleEl = document.querySelector("title")
    const faviconEl = document.querySelector("link[rel='shortcut icon']")

    const regex = /\((\d+)\)\s/

    if (regex.test(titleEl.innerText)) {
      const parts = titleEl.innerText.split(" ")
      parts.shift()
      console.log("regex", parts.join(" "))

      titleEl.innerText = parts.join(" ")
    }

    if (faviconEl.href !== normalFavicon) {
      faviconEl.href = normalFavicon
    }
  }

  function cleanRightSidebar() {
    const box = document.querySelector(".r-vacyoi")

    while (box?.children?.length > 1) {
      box.removeChild(box.lastElementChild)
    }
  }

  function cleanNavbar() {
    const notifCountEl = document.querySelector(".r-1m4drjs")
    const homeUpdateEl = document.querySelector(".r-1ozsyd3")
    const premiumEl = document.querySelector("a[href='/i/premium_sign_up']")
    const verifiedEl = document.querySelector(
      "a[href='/i/verified-orgs-signup']"
    )
    const jobsEl = document.querySelector("a[href='/jobs']")

    jobsEl?.remove()
    verifiedEl?.remove()
    premiumEl?.remove()
    notifCountEl?.remove()
    homeUpdateEl?.remove()
  }

  function cleanAds() {
    const elements = document.querySelectorAll(
      "span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3"
    )
    // .css-175oi2r
    let adElement = Array.from(elements).filter(
      (el) => el.innerText === "Ad"
    )[0]

    if (!adElement) return

    while (adElement.classList.toString() !== "css-175oi2r") {
      adElement = adElement.parentElement
    }

    adElement.remove()
  }

  cleanTitle()
  cleanRightSidebar()
  cleanNavbar()
  cleanAds()

  const observer = new MutationObserver(() => {
    cleanTitle()
    cleanRightSidebar()
    cleanNavbar()
    cleanAds()
  })

  const config = { childList: true, subtree: true }

  observer.observe(document.body, config)
})()
