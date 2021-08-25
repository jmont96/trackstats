import getAccessToken from "../../lib/spotify";
import Layout from "../../components/layout";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'


const Track = ({ audio_features_json, track_json, artists_json, recommendations_json }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const recommended_tracks = recommendations_json.tracks;

  var key = "";
  var bpm = audio_features_json.tempo + "";
  var mode = "";
  var popularity = "";
  if (track_json.popularity > 80) {
    popularity = "Very Popular"
  }
  else if (track_json.popularity > 70) {
    popularity = "Popular"
  }
  else if (track_json.popularity > 50) {
    popularity = "Kind of Popular"
  }
  else {
    popularity = "Not Popular"
  }
  if ((audio_features_json.mode = 1)) {
    mode = "Major";
  } else {
    mode = "Minor";
  }
  // console.log(audio_features_json.key)
  switch (audio_features_json.key) {
    case 0:
      key = "C";
      break;
    case 1:
      key = "C#";
      break;
    case 2:
      key = "D";
      break;
    case 3:
      key = "D#";
      break;
    case 4:
      key = "E";
      break;
    case 5:
      key = "F";
      break;
    case 6:
      key = "F#";
      break;
    case 7:
      key = "G";
      break;
    case 8:
      key = "G#";
      break;
    case 9:
      key = "A";
      break;
    case 10:
      key = "A#";
      break;
    case 11:
      key = "B";
      break;
  }
  key = key + " " + mode;

  bpm = bpm.split(".")[0] + " BPM"

  const track_data = audio_features_json;
  const loudness = Math.abs(track_data.loudness) / 2;
  var chart_loudness = 10 - loudness;

  const chart_data = [
    track_data.danceability * 10,
    track_data.energy * 10,
    track_data.valence * 10,
    chart_loudness,
  ];

  const layout_1 = { width: (track_data.danceability * 100) + '%' }
  const layout_2 = { width: (track_data.energy * 100) + '%' }
  const layout_3 = { width: (track_data.valence * 100) + '%' }
  const layout_4 = { width: (chart_loudness * 10) + '%' }

  return (
    <Layout>
      <div class="flex mb-16">
        <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 mx-auto">
          <div class="flex w-full md:w-1/3">
            <img
              class="rounded-lg w-full"
              src={track_json.album.images[0].url}
              alt="Picture of the author"
            />
          </div>
          <div class="flex flex-col md:min-h-full justify-center w-full md:w-2/3">
            <h2 class="flex font-bold text-2xl mb-2">{track_json.name}</h2>

            <div class="flex mb-4 flex-wrap max-h-12 items-start justify-start">
              {artists_json.artists.map((artist) => {
                return (
                  <div class="flex space-x-2 items-center mt-2 mr-2">
                    { artist.images[0] &&
                      <Image
                        class="rounded-full cursor-pointer"
                        src={artist.images[0].url}
                        height="30"
                        width="30"
                      ></Image>
                    }

                    <p class="text-gray-400 text-xs font-medium">
                      {artist.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex mb-12 items-center justify-center flex-col md:flex-row space-y-4 md:space-y-0">
          <div class="flex w-full md:w-1/3  md:justify-center">
            <div class="flex space-x-4 items-center">
              <div class="bg-gray-50 py-3 px-3 rounded-2xl flex items-center justify-center">
                <i class="bx bx-key font-bold text-gray-900"></i>
              </div>
              <h3 class="font-bold text-md">{key}</h3>
            </div>
          </div>
          <div class="flex w-full md:w-1/3  md:justify-center">
            <div class="flex space-x-4 items-center">
              <div class="bg-gray-50 py-3 px-3 rounded-2xl flex items-center justify-center">
                <i class="bx bx-time font-bold text-gray-900"></i>
              </div>
              <h3 class="font-bold text-md">{bpm}</h3>
            </div>
          </div>
          <div class="flex w-full md:w-1/3  md:justify-center">
            <div class="flex space-x-4 items-center">
              <div class="bg-gray-50 py-3 px-3 rounded-2xl flex items-center justify-center">
                <i class="bx bxs-award font-bold text-gray-900"></i>
              </div>
              <h3 class="font-bold text-md">{popularity}</h3>
            </div>
          </div>
        </div>
      </div>


      <div classs="mb-24">
        <h1 class="font-bold text-gray-900 text-lg md:text-xl mb-6">Track Features</h1>
        <div class="mb-6">
          <div class="flex items-center mb-2">

            <h4 class="font-bold text-gray-700 text-sm mr-2">Danceability</h4>
            &bull;
            <p class="text-xs font-medium text-gray-500 ml-2">{Math.round(audio_features_json.danceability * 100) / 10} </p>
            
          </div>

          <div classs="rounded-full h-2 w-full bg-white">
            <div class="rounded-full h-2 bg-indigo-500" style={layout_1} ></div>
          </div>
        </div>
        <div class="mb-6">
          <div class="flex items-center mb-2">

            <h4 class="font-bold text-gray-700 text-sm mr-2">Energy</h4>
            &bull;
            <p class="text-xs font-medium text-gray-500 ml-2">{Math.round(audio_features_json.energy * 100) / 10} </p>
          </div>
          <div classs="rounded-full h-2 w-full bg-white">
            <div class="rounded-full h-2 bg-indigo-500" style={layout_2} ></div>
          </div>
        </div>
        <div class="mb-6">
          <div class="flex items-center mb-2">

            <h4 class="font-bold text-gray-700 text-sm mr-2">Happiness</h4>
            &bull;
            <p class="text-xs font-medium text-gray-500 ml-2">{Math.round(audio_features_json.valence * 100) / 10} </p>
          </div>
          <div classs="rounded-full h-2 w-full bg-white">
            <div class="rounded-full h-2 bg-indigo-500" style={layout_3} ></div>
          </div>
        </div>
        <div class="mb-6">
          <div class="flex items-center mb-2">
            <h4 class="font-bold text-gray-700 text-sm mr-2">Loudness</h4>
            &bull;
            <p class="text-xs font-medium text-gray-500 ml-2">{Math.round(chart_loudness * 10) / 10} </p>
          </div>
          <div classs="rounded-full h-2 w-full bg-white">
            <div class="rounded-full h-2 bg-indigo-500" style={layout_4} ></div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="mb-24">
        <h1 class="font-bold text-gray-900 text-lg md:text-xl mb-6">Mix It With</h1>
        <div class="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-12">
          {recommended_tracks.map((track) => {
            return (
              <div class=" flex flex-col w-1/3">
                <Link href={"/track/" + track.id}>
                  <img
                    class="rounded-lg cursor-pointer w-full"
                    src={track.album.images[0].url}
                    alt="Picture of the author"
                  /></Link>

                <h3 class="text-gray-900 font-semibold text-xs md:text-sm mt-1 ">{track.name}</h3>
                <p class="text-gray-400 text-xs font-medium">
                  {track.artists[0].name}
                </p>
              </div>)
          })}
        </div>


        {!recommended_tracks[0] && <div class="justify-center items-center flex">No data available for this track...</div>}
      </div>



    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { access_token } = await getAccessToken();
  const audio_features = await fetch(
    `https://api.spotify.com/v1/audio-features/${params.id}`,
    { headers: { Authorization: "Bearer " + access_token } }
  );
  console.log("hello there")

  const audio_features_json = await audio_features.json();

  const track = await fetch(`https://api.spotify.com/v1/tracks/${params.id}`, {
    headers: { Authorization: "Bearer " + access_token },
  });

  const track_json = await track.json();

  var artist_string = "";

  track_json.artists.map((artist) => {
    artist_string = artist_string + artist.id + "%2C";
  });
  artist_string = artist_string.substring(0, artist_string.length - 3);

  const artists = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artist_string}`,
    {
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  const artists_json = await artists.json();

  const artist_id = artists_json.artists[0].id;
  const track_id = audio_features_json.id;
  const dance_target = audio_features_json.danceability;
  const valence_target = audio_features_json.valence;
  const energy_target = audio_features_json.energy;
  const tempo_target = audio_features_json.tempo;


  const recommendations = await fetch(`https://api.spotify.com/v1/recommendations?limit=3&market=US&seed_artists=${artist_id}&seed_tracks=${track_id}&target_danceability=${dance_target}&target_energy=${energy_target}&min_popularity=50&target_tempo=${tempo_target}&target_valence=${valence_target}`, {
    headers: { Authorization: "Bearer " + access_token },
  });

  const recommendations_json = await recommendations.json();

  console.log("AUDIO FEATURES")
  console.log(audio_features_json);
  console.log("TRACK")
  console.log(track_json);
  console.log("ARTIST")
  console.log(artists_json);
  console.log("RECOMMENDATIONS")
  console.log(recommendations_json);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      audio_features_json,
      track_json,
      artists_json,
      recommendations_json
    },
  };
}

export async function getStaticPaths() {
  var arr = ["1", "2"];
  // Get the paths we want to pre-render based on posts
  const paths = arr.map((track) => ({
    params: { id: track },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: 'blocking' };
}

export default Track;
