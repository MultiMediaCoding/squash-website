
export function AboutPhoto({image, subtitle}: {image: string, subtitle: string}) {
    return (
        <div>
        <img className={"img"} src={image} alt={subtitle} />
        <p style={{ marginTop: '7px', fontSize: '13px' }} className="text-sm text-muted-foreground">{subtitle}</p>          </div>
    )
}