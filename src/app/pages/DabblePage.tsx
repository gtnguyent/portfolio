import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Camera, PenTool, Music, Scissors, Sparkles, Heart, Star, X, ExternalLink } from "lucide-react";

export function DabblePage() {
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const [selectedWriting, setSelectedWriting] = useState<any>(null);

  const dabbleItems = [
    {
      type: "art",
      title: "Neon Nights",
      image: "/assets/dabble/dabble_night.webp",
      date: "watercolor",
      note: "Neon Nights",
      rotation: 0,
      aspectRatio: "aspect-[4/3]",
      size: "large",
      color: "#FFD23F",
    },
    {
      type: "art",
      title: "Mrs. Bart",
      image: "/assets/dabble/dabble_mrsbart.webp",
      date: "crochet",
      note: "Mrs. Bart",
      rotation: 0,
      aspectRatio: "aspect-square",
      size: "medium",
      color: "#FF6B35",
    },
    {
      type: "art",
      title: "Reid",
      image: "/assets/dabble/dabble_reid.webp",
      date: "stipple with black and white pens",
      note: "Reid",
      rotation: 0,
      aspectRatio: "aspect-[3/4]",
      size: "small",
      color: "#6FA9BB",
    },
    {
      type: "art",
      title: "Bloom",
      image: "/assets/dabble/dabble_flower.webp",
      date: "oil pastel",
      note: "Bloom",
      rotation: 0,
      aspectRatio: "aspect-square",
      size: "large",
      color: "#EE964B",
    },
    {
      type: "art",
      title: "Bret",
      image: "/assets/dabble/dabble_brock.webp",
      date: "adobe illustrator",
      note: "Bret",
      rotation: 0,
      aspectRatio: "aspect-[4/5]",
      size: "medium",
      color: "#C44569",
    },
    {
      type: "art",
      title: "Boston",
      image: "/assets/dabble/dabble_sunset.webp",
      date: "photography",
      note: "Boston",
      rotation: 0,
      aspectRatio: "aspect-[3/4]",
      size: "large",
      color: "#A8E6CF",
    },
  ];

  const songs = [
    { 
      title: "The View Between Villages", 
      artist: "Noah Kahan", 
      mood: "melancholic",
      color: "#687D31",
      youtubeLink: "https://www.youtube.com/watch?v=O53pjBjmojQ&list=RDO53pjBjmojQ&start_radio=1",
      spotifyLink: "https://open.spotify.com/track/6PdWPdgPoVCT9WLFMVnhxx",
      lyrics: `Air in my lungs
'Til the road begins
As the last of the bugs
Leave their homes again
And I'm splitting the road down the middle
For a minute the world seemed so simple

Feel the rush of my blood
I'm seventeen again
I am not scared of death
I've got dreams again
It's just me and the curve of the valley
And there is meaning on Earth, I am happy

Oh
Oh

Passed Alger Brook Road, I'm over the bridge
A minute from home but I feel so far from it
The death of my dog, the stretch of my skin
It's all washin' over me, I'm angry again
The things that I lost here, the people I knew
They got me surrounded for a mile or two
The car's in reverse, I'm grippin' the wheel
I'm back between villages and everything's still`,
  analysis: `View Between Villages" is fundamentally about the tension between self-preservation and devotion. Kahan needs to leave his small Vermont town to survive emotionally and pursue his life, but that choice comes at the direct cost of the people he loves most, particularly his parents. The "view between villages" is that stretch of road connecting two places, and Kahan inhabits it as a metaphor: he's caught between the person he was raised to be and the person he's becoming, between the pull of home and the necessity of escape.

There's a deep current of guilt running through the song. Kahan doesn't romanticize leaving; he's unflinching about the fact that his absence is a kind of wound he's inflicting. He watches his parents age from a distance, aware that the years he spends away are years he won't get back with them. It's not a celebration of independence; it's a reckoning with its cost.

The song also touches on the strange grief of outgrowing a place you still love. The town didn't fail him — if anything, he carries it with him — but staying would have meant a slow suffocation. That paradox, loving something deeply while knowing you had to leave it, is what gives the song its particular ache. It's not resentment or relief, just a quiet, complicated sorrow that doesn't resolve itself neatly, because in real life, it never does.`,
    },
    {
      title: "On The Drive Home",
      artist: "NIKI",
      mood: "wistful",
      color: "#6FA9BB",
      youtubeLink: "https://www.youtube.com/watch?v=x4T67HqKWsw",
      spotifyLink: "https://open.spotify.com/track/6b9yQhy8XyaeadWPlFYSDE",
      lyrics: `Love, keep your eyes on the road
'Cause when I stare, all I see's two foggy windows to a lost soul
And maybe, maybe it's all my fault
That it's so quiet on the drive home

Babe, can I build my home in your mind?
A disheveled maze constellated and intertwined
But somehow my favorite kind
And my favorite view when it untangles in the moonlight

Darlin', we're getting older
In less than eight months you'll wash tear stains off of your shoulder
And drenched in alcohol and conceit
The cold-blooded bodies quick on their feet
Will tell you how to earn your stripes
And you'll be listening while
I sit here with glistening eyes
As the stripes on my back chip and dry
You won't be listening to my cries
Anymore

Ooh
Ooh

And we'll be two pieces of driftwood
Floating in a sea of missed calls and excuses
And your home will change into four walls and a mini fridge
Instead of four limbs and lips to kiss

But for now, the night is young
And you are here and Snow Patrol just came on the radio
So darlin', let's take
Darlin', let's take
The long way home

Ooh
Ooh
Ooh

Love, keep your eyes on the road
`,
      analysis: "‘On the Drive Home’ by NIKI is a delicate unraveling, a song about the quiet devastation that hits when the distraction of being with someone finally falls away and you're left alone with the truth of what's ending. The drive home becomes a space of forced confrontation: no more noise, no more presence to hide behind, just the creeping realization that something is slipping or already gone. NIKI writes with an emotional precision that makes the ordinary feel unbearable: a car ride, a radio, the silence between two people who once had everything to say. The production mirrors this perfectly, staying soft and unhurried, never melodramatic, because the feeling she's describing isn't explosive grief — it's the quieter, more suffocating kind that settles in slowly and stays."
    },
    {
      title: "Boy in Love",
      artist: "Elliot James Raey",
      mood: "buoyant",
      color: "#406768",
      youtubeLink: "https://www.youtube.com/watch?v=0SGtar62tB8&list=RD0SGtar62tB8&start_radio=1",
      spotifyLink: "https://open.spotify.com/track/19TlagHWD2YdNCOoZc1Fjp",
      lyrics: `Never been easy to please, always been best on my own
I don't need her to be kind, I get my kicks all alone
I don't do walks on the beach, I don't get dressed up for shows
She got me good, I feel like a boy in love

My heart's been bruised like a peach, my soul's been set like a stone
But now when Sam Cooke sings, she got me whistlin' along
I didn't think I could care, but now I wait by the phone
She got me good, I feel like a boy in love

Mercy, please
Suddenly I'm crawlin' to her on my knees (whoa, whoa, whoa)
Oh-oh, oh-oh, oh, mercy, please
Suddenly I need her like a harmony (whoa, whoa, whoa)
Because she talks and she walks like a woman
She makes me feel like a boy, when I shouldn't
Oh, she got me good, I feel like a boy in love

Well now, I'm eager to please, when my lady is home
I'll give her X, Y, Z, so I can call her my own
I used to act like a man, but what did I ever know?
She got me good, I feel like a boy in love

Mercy, please
Suddenly I'm crawlin' to her on my knees (whoa, whoa, whoa)
Oh-oh, oh-oh, oh, mercy, please
Suddenly I need her like a harmony (whoa, whoa, whoa)
She is the subject of all my desire
Until I found her, I was merely a liar
Oh, she got me good, I feel like a boy in love

Oh, she got me good, I feel like a boy in love`,
      analysis: 
      "'Boy in Love' by Elliot James Reay is a refreshingly upbeat track that leans into the buoyant, feel-good energy of classic 1950s rock 'n' roll and doo-wop. The song is bright and bouncy, driven by a lively bassline, crisp guitar work, and a rhythm that practically demands foot-tapping. Reay's vocal delivery matches the energy perfectly; he sounds genuinely giddy, riding the melody with an ease that makes the song feel effortless and fun rather than overwrought. There's a lightness to the whole thing — even the lyrical subject matter, the helpless surrender to infatuation, is played with a grin rather than anguish. It's the kind of song that feels like sunshine, drawing more from the jubilant, carefree side of its retro influences than the melancholic end of the spectrum."
    },
  ];

  const writingSnippets = [
    {
      title: "GT Cookie Recipe",
      date: "",
      preview: "Yield: uncertain. Prep time: longer than you'll admit. Cook time: one sitting or seventeen years, depending.",
      fullText: `Ingredients
* 1 original idea (you will not be able to source this; substitute with one borrowed image, one overheard sentence, or one thing you can't stop thinking about for reasons you haven't examined)
* 2-3 hours of not writing
* 1 distraction, necessary
* 1 distraction, unnecessary (add anyway)
* A vague feeling of being almost ready
* Enough doubt to keep you honest; not so much that you stop
* One true thing, located late, usually in the last paragraph, often in a line you wrote by accident

Method
1. Begin by thinking about while you're wandering. Do not write anything down. Lose the best part. Grieve briefly.
2. Start again with what remains or when it comes back.
3. Write the beginning three times. The first will be throat-clearing. The second will be closer. The third will become the middle, and you'll need a new beginning, which you'll find by cutting the first line of the third attempt.
4. At some point you will write a sentence that surprises you. This is what you were making. Everything before it was preparation. Everything after is just making sure it has somewhere to land.
5. Leave it alone for a day, week, or month. Return to it like you're meeting someone you're not sure you still know.
6. Read it out loud. You'll find the puzzle pieces by sound, a rhythm that trips, a word doing the wrong job, a moment that asks for more than you gave it.
7. Fix those. Stop before you fix the life out of it.

Notes
The recipe changes every time. This is not a flaw.
Serves one, usually. Sometimes, later, it serves someone you'll never meet, which is the whole point of making anything at all.
`,
    },
    {
      title: "She Said She Was Fine",
      date: "",
      preview: "She said she was fine. This was at the party, when she first walked through the door. She meant it the way—well—she didn't mean it.",
      fullText: `She said she was fine. This was at the party, when she first walked through the door. She meant it the way—well—she didn't mean it. It's just the phrase that rolls off your tongue as a punctuation or social contract or the password that lets everyone continue socializing. It was an okay night, and she didn't completely hate it.

She said she was fine. She said it to her mother, when she called because they hadn't spoken in weeks. She meant it as protection. Was it to protect her mother from her chaos or to protect herself from her mother? She doesn't really know. Her mother has a way of worrying that made it everyone else's problem. She doesn't have the mental capacity to worry or let her mother worry. A small merciful act in both directions.

She said she was fine. This was on her drive home from the doctors.  She spoke out loud, to no one, or maybe to convince herself. She would say it many times, changing the tone with each one, because maybe then she would believe herself. Maybe. 

She said she was fine. It was her last words to him, and they were the most dishonest and true words she'd ever said to him. She was fine with leaving him. Fine reliving their memories alone. Fine accepting he would never change. She was fine and devastated. Both were real, but she only had room to say one of them standing in the doorway with her keys in her hand.

She said she was fine. Many years later, she said this to a stranger on a train who'd asked if she needed help with her bag. She meant nothing by it except yes, actually, I've got it. She swung the bag up onto the rack in one clean motion. Sat down. Watched the city give way to the middle of things.

Fine. Just fine. 

`,
    },
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "w-[220px]";
      case "medium":
        return "w-[280px]";
      case "large":
        return "w-[340px]";
      default:
        return "w-[280px]";
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] dark:bg-neutral-900 relative">
      {/* Colorful Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFD23F] opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-[#FF6B35] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-[#6FA9BB] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-44 h-44 bg-[#EE964B] opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section - Matching Work Page */}
      <section className="pt-32 pb-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-normal leading-none mb-8 text-foreground"
          >
            Dabble
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl font-light opacity-70 max-w-3xl">
               Things I do here and there.
            </p>
            {/* Decorative Icons */}
            <div className="flex gap-6">
              <Camera className="w-5 h-5 text-[#FF6B35]" />
              <PenTool className="w-5 h-5 text-[#6FA9BB]" />
              <Music className="w-5 h-5 text-[#EE964B]" />
              <Scissors className="w-5 h-5 text-[#FFD23F]" />
              <Sparkles className="w-5 h-5 text-[#C44569]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrapbook Grid */}
      <section className="pb-24 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Current Rotation Card - First */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FFD23F] to-[#EE964B] p-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5 text-white" />
                <h3 className="font-bold text-lg tracking-tight text-white">Current Rotation</h3>
              </div>
              <div className="space-y-3">
                {songs.map((song, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedSong(song)}
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 rounded-lg bg-white/90 hover:bg-white transition-all duration-300 text-left cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <p className="text-sm font-medium text-neutral-900">{song.title}</p>
                    <p className="text-xs text-neutral-600 mt-1">{song.artist}</p>
                    <p className="text-xs text-neutral-500 font-mono mt-1">{song.mood}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Writing Snippets Card - Second */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#6FA9BB] to-[#406768] p-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{ transform: "rotate(3deg)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <PenTool className="w-5 h-5 text-white" />
                <h3 className="font-bold text-lg tracking-tight text-white">From the Journal</h3>
              </div>
              <div className="space-y-4">
                {writingSnippets.map((snippet, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedWriting(snippet)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left space-y-2 hover:opacity-90 transition-all cursor-pointer"
                  >
                    <p className="text-sm font-bold text-white underline decoration-white/50 hover:decoration-white">
                      {snippet.title}
                    </p>
                    <p className="text-xs font-light leading-relaxed italic text-white/95">
                      {snippet.preview}
                    </p>
                    <p className="text-xs text-white/70 font-mono">{snippet.date}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Things I Love Card - Third */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#C44569] to-[#FF6B35] p-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-white" />
                <h3 className="font-bold text-lg tracking-tight text-white">things I love</h3>
              </div>
              <div className="space-y-2 text-sm font-light text-white">
                <p>→ trader joe's bread & butter chips</p>
                <p>→ la la land movie</p>
                <p>→ push ups</p>
                <p>→ analyzing zuko's character arc (atla) </p>
                <p>→ solving 1000 piece puzzles </p>
                <p>→ people watching</p>
              </div>
            </motion.div>

            {/* Photos - Evenly spaced */}
            {dabbleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="relative flex items-center justify-center"
              >
                {/* Polaroid-style Card */}
                <div 
                  className={`bg-white dark:bg-neutral-800 p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 group ${getSizeClass(item.size)}`}
                  style={{
                    borderBottom: `6px solid ${item.color}`,
                    transform: `rotate(${item.rotation}deg)`,
                  }}
                >
                  {/* Image */}
                  <div className={`${item.aspectRatio} bg-neutral-100 dark:bg-neutral-700 mb-3 overflow-hidden`}>
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Handwritten-style Caption */}
                  <div className="space-y-1 pb-2">
                    <p className="text-sm font-mono text-foreground">{item.note}</p>
                    <p className="text-xs opacity-60 font-mono">{item.date}</p>
                  </div>

                  {/* Decorative Tape with color */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 opacity-80"
                    style={{
                      backgroundColor: item.color,
                      transform: `translateX(-50%) rotate(${-item.rotation - 3}deg)`,
                    }}
                  />
                  <div
                    className="absolute -top-3 right-6 w-16 h-6 opacity-70"
                    style={{
                      backgroundColor: item.color,
                      transform: `rotate(${-item.rotation + 5}deg)`,
                      filter: 'brightness(0.9)',
                    }}
                  />
                </div>

                {/* Scattered doodles around photos */}
                {index === 0 && (
                  <Star className="absolute -bottom-8 -right-6 w-8 h-8 fill-[#FFD23F] text-[#FFD23F] rotate-12" />
                )}
                {index === 2 && (
                  <Heart className="absolute -top-6 -right-8 w-8 h-8 fill-[#C44569] text-[#C44569] -rotate-12" />
                )}
                {index === 4 && (
                  <Star className="absolute -bottom-6 -left-8 w-7 h-7 fill-[#6FA9BB] text-[#6FA9BB] rotate-45" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-sm font-light opacity-50 italic">
              "The world rewards audacity, not potential."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Song Modal */}
      <AnimatePresence>
        {selectedSong && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedSong(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSong(null)}
                className="sticky top-0 right-0 ml-auto flex items-center justify-center w-10 h-10 m-4 bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 rounded-full transition-colors shadow-lg z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="px-8 pb-8 -mt-6 space-y-6">
                {/* Header */}
                <div>
                  <h2 className="text-4xl font-bold tracking-tight mb-2">{selectedSong.title}</h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-1">{selectedSong.artist}</p>
                  <p className="text-sm font-mono opacity-60">{selectedSong.mood}</p>
                </div>

                {/* Listen Links */}
                <div className="flex flex-wrap gap-4">
                  {/* YouTube Link */}
                  <a
                    href={selectedSong.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <Music className="w-4 h-4" />
                    Listen on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Spotify Link */}
                  <a
                    href={selectedSong.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
                  >
                    <Music className="w-4 h-4" />
                    Listen on Spotify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Analysis */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-xl font-bold mb-3">Analysis</h3>
                  <p className="text-sm font-light leading-relaxed whitespace-pre-line opacity-80">
                    {selectedSong.analysis}
                  </p>
                </div>

                {/* Lyrics */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-xl font-bold mb-3">Lyrics</h3>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg max-h-96 overflow-y-auto">
                    <p className="text-sm font-light leading-relaxed whitespace-pre-line opacity-80">
                      {selectedSong.lyrics}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Writing Modal */}
      <AnimatePresence>
        {selectedWriting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedWriting(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWriting(null)}
                className="absolute top-4 right-4 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">{selectedWriting.title}</h2>
                  <p className="text-sm font-mono opacity-60">{selectedWriting.date}</p>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-base font-light leading-relaxed whitespace-pre-line">
                    {selectedWriting.fullText}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}