// src/components/TVWall.tsx
export default function TVWall() {
  const channels = [
    { name: "CCTV1", url: "https://livetv.tsx/cctv1.m3u8" },
    { name: "CCTV5", url: "https://livetv.tsx/cctv5.m3u8" },
    { name: "CCTV6", url: "https://livetv.tsx/cctv6.m3u8" },
    { name: "湖南卫视", url: "https://your-source/hunantv.m3u8" },
    { name: "浙江卫视", url: "https://your-source/zhejiang.m3u8" },
    { name: "江苏卫视", url: "https://your-source/jiangsu.m3u8" },
    { name: "北京卫视", url: "https://your-source/beijing.m3u8" },
    { name: "凤凰卫视", url: "https://your-source/fhws.m3u8" },
    // 你可以加 50 个、100 个、200 个，随便加！
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8">MoonTV 私人电视墙</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {channels.map((ch) => (
          <a
            key={ch.name}
            href={`/play?url=${encodeURIComponent(ch.url)}`}
            className="block bg-gray-900 hover:bg-gray-800 transition-all rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            <div className="bg-gray-700 h-32 flex items-center justify-center">
              <span className="text-white text-xl font-bold">{ch.name}</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-green-400 text-sm">● 正在直播</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
