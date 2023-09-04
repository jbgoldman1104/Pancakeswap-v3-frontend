import { Button, Flex, Heading, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/legacy/image'
import { ChainId } from '@pancakeswap/sdk'
import { useActiveChainId } from 'hooks/useActiveChainId'
import styled, { keyframes } from 'styled-components'
import bunnyImage from '../../../../public/images/home/lunar-bunny/astronaut-bunny.png'
import CompositeImage, { CompositeImageProps } from './CompositeImage'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  return (
    <>
      <style jsx global>
        {`
          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }

          .ValueItem {
            font-size: 1.4rem !important;
          }

          .ValueItem .value-text {
            font-weight: bold;
            font-size: 1.4rem !important;
            margin-top: 10px;
          }

          .ValueItem.Sep::before{
            width: 1px;
            background-color:white;
          }

          .banner-bg::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0.23deg, #030200 5.68%, rgba(21, 6, 3, 0.42) 81.9%);
            z-index: 9;
          }

        `}
      </style>
      <BgWrapper className="banner-bg">
        <InnerWrapper>
          <img src="images/zprotocol/banner_bg6.jpg" alt="" />
        </InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt='120px'
        id="homepage-hero"
        
      >
      
        <Flex flex="1" flexDirection="column"   pb="60px">
          <Heading scale="xxl"  mb="50px">
            THE LEADING DEFI<br/>ECOSYSTEM ON<br/>ZKSYNC
          </Heading>

          <Flex>
            <Flex flex="1" flexDirection="column" className="ValueItem">
                <span>Total Value Locked</span>
                <span className="value-text">$0</span>
            </Flex>

            <Flex flex="1" flexDirection="column" className="ValueItem Sep">
                <span>Circulating supply</span>
                <span className="value-text">600,000,000</span>
            </Flex>

            <Flex flex="1" flexDirection="column" className="ValueItem Sep">
                <span>Market cap</span>
                <span className="value-text">$660,000</span>
            </Flex>

            <Flex flex="1" flexDirection="column" className="ValueItem Sep">
                <span>Current emission</span>
                <span className="value-text">2.315/sec</span>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </>
  )
}

export default Hero
