; (() => {
  const normalFavicon = "https://abs.twimg.com/favicons/twitter.3.ico"

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  function cleanTitle() {
    const titleEl = document.querySelector("title")
    const faviconEl = document.querySelector("link[rel='shortcut icon']")

    if (!titleEl || !faviconEl) {
      return
    }

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
    const container = document.querySelector("div[aria-label='Trending']")
      ?.children[0]

    if (!container) return

    while (container.children.length > 3) {
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
    const homeEl = document.querySelector("a[href='/i/bookmarks']")

    postEl && (postEl.style.display = "none")
    jobsEl && (jobsEl.style.display = "none")
    verifiedEl && (verifiedEl.style.display = "none")
    premiumEl && (premiumEl.style.display = "none")
    notifCountEl && (notifCountEl.style.display = "none")
    homeUpdateEl && (homeUpdateEl.style.display = "none")
    exploreEl && (exploreEl.style.display = "none")
  }

  function cleanAds() {
    const elements = document.querySelectorAll(
      "span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3"
    )
    let adElement = Array.from(elements).find((el) => el.innerText === "Ad")

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

  async function cleanDiscoverMore() {
    const elements = document.querySelectorAll(
      ".css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3"
    )

    let discoveryElement = Array.from(elements).find(
      (el) => el.innerText === "Discover more"
    )

    if (!discoveryElement) return

    while (true) {
      discoveryElement = discoveryElement.parentElement
      if (
        discoveryElement.classList.toString() === "css-175oi2r" &&
        discoveryElement.getAttribute("data-testid")
      ) {
        break
      }
    }

    while (discoveryElement.nextElementSibling) {
      discoveryElement.nextElementSibling.remove()
      await delay(50)
    }

    discoveryElement.remove()
  }

  function cleanVerifiedFollowers() {
    const tabs = document.querySelectorAll(
      "div[role='tablist'] > div[role='presentation']"
    )

    tabs.length === 4 && tabs[0].remove()
  }

  function cleanTranslatePost() {
    const el = document.querySelector(
      "button.r-n6v787.r-16dba41.r-6koalj.r-1w6e6rj.r-14gqq1x.r-1loqt21"
    )

    el?.remove()
  }

  function cleanSuggestedToFollow() {
    const el = document.querySelector("aside[aria-label='Who to follow']")

    el && el.parentElement.parentElement.remove()
  }

  function cleanStarNotifs() {
    const starEl = document.querySelector("path[fill='#794BC4']")

    if (!starEl) {
      return
    }

    let notifEl = starEl.parentElement
    while (
      notifEl.classList.toString() !== "css-175oi2r" ||
      notifEl.getAttribute("data-testid") !== "cellInnerDiv"
    ) {
      notifEl = notifEl.parentElement
    }

    notifEl.remove()
  }

  function cleanVideos() {
    const tweets = document.querySelectorAll('div.css-175oi2r[data-testid="cellInnerDiv"]')

    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].querySelector('video')) {
        tweets[i].style.display = "none"
      }
    }

    // const temp = document.querySelectorAll("video")

    // temp.forEach((v) => {
    //   v.setAttribute("preload", "none")
    //   v.setAttribute("autoplay", "false")
    //   v.setAttribute("loading", "lazy")
    //   v.style.display = "none"
    // })


    // for (let i = 0; i < videoElements.length; i++) {
    //   let tweetEl = videoElements[i].parentElement

    //   while (
    //     tweetEl.classList.toString() !== "css-175oi2r" ||
    //     tweetEl.getAttribute("data-testid") !== "cellInnerDiv"
    //   ) {
    //     tweetEl = tweetEl.parentElement
    //   }

    //   tweetEl.style.display = "none"
    // }
  }

  function cleanImages() {
    const elements = document.querySelectorAll("div[data-testid='tweetPhoto']")

    for (let i = 0; i < elements.length; i++) {
      let tweetEl = elements[i].parentElement

      while (
        tweetEl.classList.toString() !== "css-175oi2r" ||
        tweetEl.getAttribute("data-testid") !== "cellInnerDiv"
      ) {
        tweetEl = tweetEl.parentElement
      }

      tweetEl.querySelectorAll("img").forEach((imgEl) => {
        imgEl.setAttribute("loading", "lazy")
        imgEl.src = ""
      })
      const { width, height } = tweetEl.getBoundingClientRect()
      tweetEl.style.opacity = "10%"
    }
  }

  function cleanNotifNavbar() {
    const el = document.querySelector("nav[aria-label='Notifications timelines']")

    el?.remove()
  }

  function cleanWhoToFollow() {
    const elements = document.querySelectorAll(".css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3")

    let whoToFollowEl = Array.from(elements).find(
      (el) => el.innerText === "Who to follow"
    )

    if (!whoToFollowEl) return

    let tweetEl = whoToFollowEl.parentElement
    while (
      tweetEl.classList.toString() !== "css-175oi2r" ||
      tweetEl.getAttribute("data-testid") !== "cellInnerDiv"
    ) {
      tweetEl = tweetEl.parentElement
    }

    for (let i = 0; i < 5; i++) {
      tweetEl.nextElementSibling.remove()
    }

    tweetEl.remove()

  }

  function cleanHomeTabs() {
    const followingEl = document.querySelectorAll("a[href='/home'][role='tab']")[1]

    if (!followingEl) return

    followingEl?.click()
    followingEl.parentElement.parentElement.remove() // remove tabs
  }

  cleanTitle()
  cleanRightSidebar()
  cleanNavbar()
  cleanAds()
  cleanMessages()
  cleanDiscoverMore()
  cleanVerifiedFollowers()
  cleanTranslatePost()
  cleanSuggestedToFollow()
  cleanStarNotifs()
  // cleanVideos()
  // cleanImages()
  cleanNotifNavbar()
  cleanWhoToFollow()
  cleanHomeTabs()

  setInterval(cleanTitle, 3000)

  const observer = new MutationObserver(() => {
    cleanTitle()
    cleanRightSidebar()
    cleanNavbar()
    cleanAds()
    cleanMessages()
    cleanDiscoverMore()
    cleanVerifiedFollowers()
    cleanTranslatePost()
    cleanSuggestedToFollow()
    cleanStarNotifs()
    // cleanVideos()
    // cleanImages()
    cleanNotifNavbar()
    cleanWhoToFollow()
    cleanHomeTabs()
  })

  const config = { childList: true, subtree: true }

  observer.observe(document.body, config)
})()
