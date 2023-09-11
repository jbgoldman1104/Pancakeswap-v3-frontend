
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Button, Heading, Text, LogoIcon, CardBody } from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";
import Link from "next/link";
import Page from '../Page'
import { AppHeader, AppBody } from '../../components/App'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`;

const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`


const LaunchPad = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <NextSeo title="LaunchPad" />
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Text mb="16px">{t("Coming Soon.")}</Text>
        <Link href="/" passHref>
          <Button as="a" scale="sm">
            {t("Back Home")}
          </Button>
        </Link>
      </StyledNotFound>
    </Page>
  );
};

export default LaunchPad;