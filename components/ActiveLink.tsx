import { withRouter } from 'next/router'

interface IPropTypes { router: any; href: any; children: any; };

const ActiveLink = ({ router, href, children }: IPropTypes) => {

    (function prefetchPages() {
        if (typeof window !== 'undefined') router.prefetch(router.pathname);
    })();

    const handleClick = (event: any) => {
        event.preventDefault();
        router.push(href);
    }

    const isCurrentPath = router.pathname == href || router.asPath === href;

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`m-0 p-0 no-underline
            ${isCurrentPath ? "text-primary" : "text-[#CBD5E1]"}
        `}
        >
            {children}
        </a>
    );
}


export default withRouter(ActiveLink);