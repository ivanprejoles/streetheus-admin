interface HeadingProps {
    title: string;
    description: string;
}

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
            <p className="text-sm text-white">
                {description}
            </p>
        </div>
    )
}