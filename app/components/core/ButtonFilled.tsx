export default function ButtonFilled({ name, URL }: NameLinkProps) {
    return (
        <a href={URL}>
            <button className='bg-black text-white p-3 font-medium rounded-xl'>
                {name}
            </button>
        </a>
    );
}
