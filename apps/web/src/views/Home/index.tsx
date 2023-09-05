import styled from 'styled-components'
import { PageSection, Flex } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding: 0px !important;
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <style jsx global>
        {`
          #home-1 .page-bg {
            background-color: #000;
          }
          #home-2 .page-bg {
            background: linear-gradient(180deg, #ffffff 22%, #d7caec 100%);
          }
          #home-3 .page-bg {
            background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
          }
          #home-4 .inner-wedge svg {
            fill: #d8cbed;
          }

          .container {
            padding-left: 15px;
            padding-right: 15px;
            width:100%;
          }
          .about-img {
            position: relative;
            padding-left: 120px;
          }

          .fadeInLeft {
            -webkit-animation-name: fadeInLeft;
            animation-name: fadeInLeft;
          }

          .about-img img.img-two {
            position: absolute;
            left: 60px;
            top: 40px;
          }

          .section-title {
            margin-bottom: 30px;
          }

          .section-title .title {
            font-size: 42px;
            margin-bottom: 0;
            letter-spacing: -0.01em;
          }

          .section-title .title span {
            color: #00a6f1;
          }

          p.content {
            font-size: 16px;
            font-weight: normal;
            line-height: 1.75;
            color: #727885;
            margin-bottom: 15px;
          }

          .text-center {
            text-align:center;
          }

          .section-title .sub-title {
            text-transform: uppercase;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            position: relative;
            letter-spacing: 0.09em;
            display: inline-block;
            padding: 0 15px;
            margin-bottom: 25px;
          }

          h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
            color: inherit;
          }

          a, a:hover {
            color: #00a6f1;
          }
            
          .choose-item:hover {
            border-color: transparent;
          }
          .choose-item {
              background: #000000;
              border: 1px solid #17150c;
              border-radius: 15px;
              padding: 60px 40px;
              transition: .3s ease-in-out;
          }
          .card-item {
            padding: 0 10px;
          }

          .choose-item:hover .choose-icon {
            border-color: #00a6f1;
          }

          .choose-item:hover {
            border-color: transparent;
          }
          .choose-item {
            background: #000000;
            border: 1px solid #17150c;
            border-radius: 15px;
            padding: 60px 40px;
            transition: .3s ease-in-out;
          }

          .choose-icon {
            /* width: 40%; */
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.07);
            border: 4px solid rgba(255, 255, 255, 0.06);
            border-radius: 50%;
            margin-bottom: 30px;
            transition: .3s ease-in-out;
            color: #00a6f1;
          }

          .choose-content .title {
            font-size: 22px;
            margin-bottom: 24px;
            font-weight: 500;
            text-transform: none;
            line-height: 1.27;
          }
          .choose-content p {
            margin-bottom: 0px;
            font-size: 15px;
            line-height: 22px;
            color: #A4B4C3;
          }
          .about-content p {
            margin-bottom: 40px;
            width: 100%;
            color: #A4B4C3;
            text-align: center;
          }
          
          p {
              font-size: 16px;
              font-weight: normal;
              line-height: 1.75;
              color: #727885;
              margin-bottom: 15px;
          }
        
        `}
      </style>
      {/* .section-title .sub-title::after, .section-title .sub-title::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 10px;
            height: 10px;
            background: #00a6f1;
            border-radius: 50%;
          } */}
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      >
        <section id="about" className="about-area pt-50 pb-130">
          <div className="container">
            <Flex alignItems="center" flexDirection="row" flex="1" justifyContent="center">
              <Flex  flex="1">
                <div
                  className="about-img wow fadeInLeft"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <img src="images/zprotocol/about_img01.png" alt="" />
                  <img src="images/zprotocol/banner_shape02.png" alt="" className="img-two" />
                </div>
              </Flex>
              <Flex  flex="1">
                <div
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInRight",
                  }}
                >
                  <Flex className="section-title">
                    <h2 className="title" style={{textAlign: "center"}}>
                      The Leading DeFi Ecosystem <span>On zkSync</span>
                    </h2>
                  </Flex>
                  <p style={{textAlign: "center"}} className="content">
                    zkSync is a layer 2 scaling solution for Ethereum, designed to
                    offer faster, cheaper, and more efficient transactions. Yield
                    farming has become a popular concept in the decentralized
                    finance (DeFi) space, offering investors an opportunity to
                    earn passive income by lending or staking their digital
                    assets. <br />Z Protocol offers a set of tools essential to a
                    growing decentralized ecosystem. <br />Our goal is to create a
                    synergy between the projects that are currently developing on
                    zkSync, we will try to collaborate with them as soon as a
                    trusting partnership can be created. <br />In what clearly
                    looks like a multi-blockchain future with a very diverse
                    community, we are committed to building synergy between zkSync
                    projects so that the community can extract the maximum benefit
                    from them in the easiest way possible.
                  </p>
                </div>
              </Flex>
            </Flex>
          </div>
        </section>

        <Flex className="choose-area" pt="100px" pb="100px" flexDirection="row">
          <Flex className="container" pb="70px" flexDirection="column">
            <Flex alignItems="center" flexDirection="row" flex="1" justifyContent="center">
              <Flex flex="1"  justifyContent="center" flexDirection="row">
                <div className="section-title text-center">
                  <h4 className="title">Discover our <span>main products</span></h4>
                  <span className="sub-title">----------------------</span>
                </div>
              </Flex>
            </Flex>
            <Flex  flexDirection="row">
              <Flex flex="1" className="card-item">
                <div className="choose-item">
                  <div className="choose-icon">
                    <a href="/farms"><i className="fa fa-tractor" style={{fontSize: "40px"}}/> </a>
                  </div>
                  <div className="choose-content">
                    <h2 className="title">
                      <a href="/farms" >FARMING</a>
                    </h2>
                    <p>
                      Z Protocol offers a means of generating rewards or earning
                      interest.<br /><br /><br /><br />
                    </p>
                  </div>
                </div>
              </Flex>
              <Flex flex="1" className="card-item">
                <div className="choose-item">
                  <div className="choose-icon">
                    <a href="/launchpad"><i className="fa fa-rocket" style={{fontSize: "40px"}}/> </a>
                  </div>
                  <div className="choose-content">
                    <h2 className="title">
                      <a href="/launchpad">LAUNCHPAD</a>
                    </h2>
                    <p>
                    With a tiered approach, the more ZP you stake, 
                    the higher your rewards and tier on our launchpad.<br /><br /><br />
                    </p>
                  </div>
                </div>
              </Flex>
              <Flex flex="1" className="card-item">
                <div className="choose-item">
                  <div className="choose-icon">
                    <a href="/swap"><i className="fa fa-retweet"  style={{fontSize: "40px"}}/> </a>
                    <i className="fad fa-arrows-h"/>
                  </div>
                  <div className="choose-content">
                    <h2 className="title">
                      <a href="/swap" >SWAP</a>
                    </h2>
                    <p>
                    Swaps are quick with low trading fees. 
                    You can also provide liquidity & earn from every trade..<br /><br /><br />
                    </p>
                  </div>
                </div>
              </Flex>
              <Flex flex="1" className="card-item">
                <div className="choose-item">
                  <div className="choose-icon">
                    <a href="/pools"><i className="fa fa-piggy-bank"  style={{fontSize: "40px"}}> </i></a>
                  </div>
                  <div className="choose-content">
                    <h2 className="title">
                      <a href="/pools" >VAULT</a>
                    </h2>
                    <p>
                      Vaults are the core of the Z Protocol ecosystem, you earn
                      more of the asset you stake in it, regardless if this is a
                      liquidity pool (LP) token or a single asset<br /><br />
                    </p>
                  </div>
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex id="about" className="about-area" pt="10px" pb="80px">
          <Flex className="container">
            <Flex alignItems="center" flexDirection="row" flex="1" justifyContent="center">
            
              <Flex flex="1" >
                <div
                  className="about-content wow fadeInRight"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "none"
                  }}
                >
                  <div className="section-title mb-30 text-center">
                    <h2 className="title">The <span>Z Protocol </span>Swap</h2>
                  </div>
                  <p>
                    Experience the power of Z Protocol Swap by effortlessly 
                    swapping tokens of your choice on our platform. 
                    Our innovative swap feature enables traders to exchange tokens 
                    in your wallet with a wide selection of other tokens. 
                    When you initiate a swap request from token X to token Y,
                    our advanced algorithm considers the relative value of
                    these tokens within Z Protocol at that moment.<a href="https://docs.zprotocol.xyz/dapps/swap" className="section-link"
                            >Read More...</a>
                  </p>
                </div>
              </Flex>
              <Flex flex="1" >
                <div
                  className="wow fadeInLeft"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "none"
                  }}
                >
                  <img src="images/zprotocol/launchpad.png" alt="" />
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex id="about" className="about-area" pt="50px" >
        <Flex className="container">
            <Flex alignItems="center" flexDirection="row" flex="1" justifyContent="center">
              <Flex flex="1" >
                <div
                  className="wow fadeInLeft"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "none"
                  }}
                >
                  <img src="images/zprotocol/locker.png" alt="" />
                </div>
              </Flex>
              <Flex flex="1" >
                <div
                  className="about-content wow fadeInRight"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "none"
                  }}
                >
                  <div className="section-title mb-30 text-center">
                    <h2 className="title">The <span>Z Protocol </span>Yield Farming</h2>
                  </div>
                  <p>
                In the expansive domain of Z Protocol, a rich tapestry of potential unfurls as
              we introduce a myriad of farming pools, each a universe of its own, catered 
                to various digital assets and protocols. These pools are uniquely structured,
                forging an ecosystem where you become the architect of your rewards, 
                  aligning them with your aspirations and preferences. <a href="https://docs.zprotocol.xyz/dapps/farming-pools" className="section-link"
                            >Read More...</a>
                  </p>
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </PageSection>
    </>
  )
}

export default Home
