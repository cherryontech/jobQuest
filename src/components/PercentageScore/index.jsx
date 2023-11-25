
export const PercentageScore = () => {
    return(
        <div style={{ width: '10%', height: '10%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
        <div style={{paddingTop: 26, paddingLeft: 164, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 50, height: 50, position: 'relative'}}>
                <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', color: '#34365C', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>80%</div>
                <div style={{width: 50, height: 50, left: 0, top: 0, position: 'absolute', borderRadius: 99, border: '6px rgba(37, 39, 76, 0.20) solid'}} />
                <div style={{width: 50, height: 50, left: 0, top: 0, position: 'absolute', borderRadius: 99, border: '6px #34365C solid'}} />
            </div>
        </div>
    </div>
    )
}