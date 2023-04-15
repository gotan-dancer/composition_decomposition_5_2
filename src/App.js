import logo from './logo.svg';
import './App.css';

function App()
{
    return(
        <div>
            <News>
                <Head1>
                    <Topic href="link1" text="Сейчас в СМИ"></Topic>
                    <Topic href="link2" text="в Германии"></Topic>
                    <Topic href="link3" text="Рекомендуем"></Topic>
                    <Datetime date="" day="" time=""></Datetime>
                </Head1>
                <NewsLinks>
                    <News1 icon="" text="" link=""></News1>
                    <News1 icon="" text="" link=""></News1>
                    <News1 icon="" text="" link=""></News1>
                    <News1 icon="" text="" link=""></News1>
                    <News1 icon="" text="" link=""></News1>
                </NewsLinks>
                <Currencies>
                    <Currency1 name="" value="" add=""></Currency1>
                    <Currency1 name="" value="" add=""></Currency1>
                    <Currency1 name="" value="" add=""></Currency1>
                </Currencies>
            </News>
            <Errors>
                <BigIcon></BigIcon>
                <Work></Work>
                <Description></Description>
            </Errors>
            <Ya>
                <BigText></BigText>
                <Links>
                    <Link1 text="" link=""></Link1>
                    <Link1 text="" link=""></Link1>
                    <Link1 text="" link=""></Link1>
                    <Link1 text="" link=""></Link1>
                    <Link1 text="" link=""></Link1>
                    <Link1 text="" link=""></Link1>
                    <Link1 text="" link=""></Link1>
                    <LinkOther text="" link=""></LinkOther>
                </Links>
                <String></String>
                <Floor>
                    <Text></Text>
                    <Link></Link>
                </Floor>
            </Ya>
            <Banner></Banner>
            <FloorBig>
                <Weather>
                    <Icon></Icon>
                    <Temperature></Temperature>
                    <Comment></Comment>
                </Weather>
                <Often>
                    <Often1 name="" comment=""></Often1>
                    <Often1 name="" comment=""></Often1>
                    <Often1 name="" comment=""></Often1>
                </Often>
                <Maps></Maps>
                <Tele></Tele>
                    <Program name="" channel=""></Program>
                    <Program name="" channel=""></Program>
                    <Program name="" channel=""></Program>
                <Efir>
                    <ProgramNow name="" channel=""></ProgramNow>
                    <ProgramNow name="" channel=""></ProgramNow>
                    <ProgramNow name="" channel=""></ProgramNow>
                </Efir>
            </FloorBig>
        </div>
    );
}

export default App;
