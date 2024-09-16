export default function NavigationItem({ name, URL, active }: NameLinkProps) {
    return (
        <a
            href={URL}
            className={active ? 'font-semibold' : 'hover:font-medium'}>
            {name}
        </a>
    );
}
