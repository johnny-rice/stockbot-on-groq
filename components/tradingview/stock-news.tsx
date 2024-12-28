'use client'

import React, { useEffect, useRef, memo } from 'react'

export function StockNews({ props: symbol }: { props: string }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerElement = container.current
    if (!containerElement) return
    
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "${symbol}",
        "isTransparent": true,
        "displayMode": "regular",
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "locale": "en"
        }`

    containerElement.appendChild(script)

    return () => {
      if (containerElement) {
        const scriptElement = containerElement.querySelector('script')
        if (scriptElement) {
          containerElement.removeChild(scriptElement)
        }
      }
    }
  }, [symbol])

  return (
    <div style={{ height: '450px' }}>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
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

export default memo(StockNews)
