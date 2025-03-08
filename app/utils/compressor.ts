

export const compress = async (data: object): Promise<string> => {
  const stream = new Blob([JSON.stringify(data)], { type: 'application/json' }).stream()
  const compressedStream = stream.pipeThrough(new CompressionStream('gzip'))
  const compressed = new Response(compressedStream)
  const blob = await compressed.blob()
  const buffer = await blob.arrayBuffer()
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
}

export const decompress = async (data: string): Promise<object> => {
  const buffer = Uint8Array.from(atob(data), c => c.charCodeAt(0)).buffer
  const stream = new Blob([buffer], { type: 'application/gzip' }).stream()
  const decompressedStream = stream.pipeThrough(new DecompressionStream('gzip'))
  const decompressed = await new Response(decompressedStream).arrayBuffer()
  return JSON.parse(new TextDecoder().decode(decompressed))
}