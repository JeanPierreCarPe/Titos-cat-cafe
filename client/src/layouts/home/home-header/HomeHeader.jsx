import { Button, SocialNetWorks } from 'components'
import React from 'react'
import './home-header.css'

const HomeHeader = () => {
  return (
    <div className='home-header'>
    <svg
        id="POST_1"
        className="home-header-paw"
        data-name="POST 1"
        viewBox="0 0 1000 882.03"
      >
        <defs>
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              className="home-header-paw-background1"
              width="100%"
              height="100%"
              xlinkHref="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80"
              x="90"
              y="50"
            />
          </pattern>
          <pattern
            id="img2"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              className="home-header-paw-background1"
              width="100%"
              height="100%"
              xlinkHref="https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
              x="-35%"
              y="50"
            />
          </pattern>
          <pattern
            id="img3"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              className="home-header-paw-background1"
              width="100%"
              height="100%"
              xlinkHref="https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              x="-40%"
              y="25%"
            />
          </pattern>
          <pattern
            id="img4"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              className="home-header-paw-background1"
              width="100%"
              height="100%"
              xlinkHref="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80"
              x="0%"
              y="-25%"
            />
          </pattern>
          <pattern
            id="img5"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              className="home-header-paw-background1"
              width="100%"
              height="100%"
              xlinkHref="https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              x="25%"
              y="-20%"
            />
          </pattern>
        </defs>
        <path
          className="cls-1"
          d="M499.98,335.67c-109.74,0-245.52,114.23-310.78,285.59-65.37,171.36,18.51,254.42,92.67,260.43,74.19,5.93,151.36-69.03,218.14-69.12,66.76,.04,143.88,75.03,218.06,69.09,74.17-5.95,158.01-89.05,92.76-260.39-65.3-171.4-201.03-285.64-310.85-285.61Z"
          fill="url(#img1)"
        />
        <path
          className="cls-2"
          d="M363.84,329.94c69.98-11.08,119.58-65.22,105.1-156.05C454.45,83.03,381.48-10.15,311.59,.89c-70,11.2-110.47,122.4-96.08,213.26,14.53,90.9,78.4,126.93,148.33,115.79Z"
          fill="url(#img2)"
        />
        <path
          className="cls-3"
          d="M229.48,360.08c-25.87-82.62-103.87-160.13-164.21-141.3C4.99,237.78-14.75,345.99,11.13,428.61c25.87,82.5,87.68,108.15,147.95,89.22,60.25-18.92,96.33-75.18,70.4-157.74Z"
          fill="url(#img3)"
        />
        <path
          className="cls-4"
          d="M636.1,329.98c70,11.14,133.89-24.95,148.29-115.82,14.5-90.87-25.99-202.08-95.98-213.22-69.97-11.12-142.98,82.13-157.41,172.98-14.42,90.85,35.08,144.93,105.09,156.06Z"
          fill="url(#img4)"
        />
        <path
          className="cls-5"
          d="M934.73,218.82c-60.37-18.89-138.37,58.65-164.26,141.22-25.96,82.59,10.11,138.87,70.36,157.76,60.3,18.97,122.07-6.69,147.99-89.19,25.97-82.6,6.16-190.9-54.1-209.79Z"
          fill="url(#img5)"
        />
      </svg>
      <div className="home-header-content">
        <div className="home-header-content-title">
          <h1 className="home-header-content-title-text">
            Ven y conoce a nuestros peluditos
            <hr className="home-header-content-title-text-horizontal-rule"></hr>
          </h1>
        </div>
        <div className="home-header-content-buttons">
          <Button text="Nuestro Menu" />
          <Button text="Nuestros Peluditos" />
        </div>
      </div>
      <SocialNetWorks />
    </div>
  )
}

export default HomeHeader