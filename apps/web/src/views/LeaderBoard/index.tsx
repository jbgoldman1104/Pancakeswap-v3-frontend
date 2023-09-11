
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { Text, Flex, CardBody, CardFooter, Button, AddIcon } from '@pancakeswap/uikit'
import { useTranslation } from "@pancakeswap/localization";
import Link from "next/link";
import Page from '../Page'
import { AppHeader, AppBody, CustomAppHeader } from '../../components/App'

const FullPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`;

const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`


const LeaderBoard = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <AppBody>
        <CustomAppHeader title="Your Account" subtitle="N/A" />
        <Body>
          <Flex flexDirection="column" alignItems="center" mt="24px">
            <Text color="textSubtle" mb="8px">
              Your ZK point
            </Text>
          </Flex>
          
        </Body>
        <CardFooter style={{ textAlign: 'center' }}>
          <Button id="join-pool-button" width="100%" >
            Connect Wallet
          </Button>
        </CardFooter>
      </AppBody>
    </Page>
  );
};

export default LeaderBoard;