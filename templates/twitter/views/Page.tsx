export default function PageView(config: {
    content: string
    profile: string
    background: string
    color: string
}) {
    const { profile, content, background, color, fontFamily, fontSize } = config

    const backgroundProp = {}

    if (background) {
        if (background?.startsWith('#')) {
            backgroundProp['backgroundColor'] = background
        } else {
            backgroundProp['backgroundImage'] = background
        }
    } else {
        backgroundProp['backgroundColor'] = '#0f0c29'
    }

    const paragraphs = content.split('\n\n').map((line) => line.trim())

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px',
                paddingBottom: '0px',
                ...backgroundProp,
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: '1rem',
                }}
            >
                {paragraphs.map((paragraph, i) => (
                    <p
                        key={i}
                        style={{
                            width: '100%',
                            fontFamily: fontFamily || 'Roboto',
                            color: color || 'white',
                            fontSize: fontSize || '0.9rem',
                            fontWeight: 500,
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            // this is needed as it doesn't break on the "@" character
                            // https://css-tricks.com/when-a-line-doesnt-break
                            wordBreak: 'break-all',
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <div
                style={{
                    minHeight: '15%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    gap: '10px',
                    color: 'white',
                }}
            >
                <img
                    style={{ border: '4px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%' }}
                    src={'https://unavatar.io/twitter/' + profile}
                    width="28px"
                    height="28px"
                    alt="Twitter Profile"
                />
                {profile}
            </div>
        </div>
    )
}
