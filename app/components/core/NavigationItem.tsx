export default function NavigationItem({ name, URL, active }: NameLinkProps) {
    return (
        <a
            href={URL}
            className={active ? 'font-semibold' : 'hover:text-gray-700'}>
            {name}
        </a>
    );
}
