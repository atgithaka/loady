import { Header, Main, NavigationItem } from '@/app/components/components';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    URL=''
                    name='Landing'
                    active
                />
                <NavigationItem
                    URL=''
                    name='Features'
                />
                <NavigationItem
                    URL=''
                    name='Pricing'
                />
            </Header>
            <Main />
        </>
    );
}
