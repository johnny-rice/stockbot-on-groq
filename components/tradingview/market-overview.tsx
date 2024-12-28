'use client'

import React, { useEffect, useRef, memo } from 'react'

export function MarketOverview({}) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerElement = container.current
    if (!containerElement) return

    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '100%',
      symbolsGroups: [
      
     
       
      ],
      showSymbolLogo: true,
      isTransparent: true,
      colorTheme: 'light',
      locale: 'en'
      // backgroundColor: "#ffffff"
    })

    containerElement.appendChild(script)

    return () => {
      const scriptElement = containerElement.querySelector('script')
      if (scriptElement) {
        containerElement.removeChild(scriptElement)
      }
    }
  }, [])

  return (
    <div style={{ height: '300px' }}>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: 'calc(100% - 32px)', width: '100%' }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default memo(MarketOverview)