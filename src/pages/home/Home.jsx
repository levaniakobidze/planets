import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import planets from "../../data/data.json";

function Home({ planetIndex, color, setColor }) {
  const [activeInfo, setActiveInfo] = useState("OVERVIEW");
  console.log(planets);

  useEffect(() => {
    setActiveInfo("OVERVIEW");
    switch (planetIndex) {
      case 0:
        setColor("#419EBB");
        break;
      case 1:
        setColor("#EDA249");
        break;
      case 2:
        setColor("#6D2ED5");
        break;
      case 3:
        setColor("#D14C32");
        break;
      case 4:
        setColor("#D83A34");
        break;
      case 5:
        setColor("#CD5120");
        break;
      case 6:
        setColor("#1EC1A2");
        break;
      case 7:
        setColor("#2D68F0");
        break;
      default:
        break;
    }
  }, [planetIndex]);

  return (
    <section className={classes.home}>
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='140vh'>
        <g fill='#FFF' fill-rule='evenodd' opacity='.202'>
          <circle cx='1155.5' cy='369.5' r='3.5' />
          <circle cx='1145.5' cy='372.5' r='1.5' />
          <circle cx='1167.5' cy='329.5' r='1.5' />
          <circle cx='1148.5' cy='298.5' r='1.5' />
          <circle cx='1225.5' cy='169.5' r='1.5' />
          <circle cx='1222' cy='174' r='2' />
          <circle cx='1199.5' cy='156.5' r='1.5' />
          <circle cx='1192.5' cy='210.5' r='1.5' />
          <circle cx='1344' cy='192' r='2' />
          <circle cx='1336' cy='332' r='2' />
          <circle cx='1362.5' cy='350.5' r='1.5' />
          <circle cx='1164.5' cy='57.5' r='2.5' />
          <circle cx='1237.5' cy='64.5' r='1.5' />
          <circle cx='1164.5' cy='35.5' r='1.5' />
          <circle cx='1016.5' cy='76.5' r='1.5' />
          <circle cx='1017' cy='32' r='2' />
          <circle cx='966.5' cy='8.5' r='3.5' />
          <circle cx='957.5' cy='54.5' r='2.5' />
          <circle cx='860.5' cy='58.5' r='3.5' />
          <circle cx='921' cy='34' r='2' />
          <circle cx='965' cy='229' r='2' />
          <circle cx='934' cy='269' r='2' />
          <circle cx='885.5' cy='287.5' r='1.5' />
          <circle cx='874.5' cy='302.5' r='1.5' />
          <circle cx='963' cy='410' r='4' />
          <circle cx='852' cy='372' r='2' />
          <circle cx='805' cy='331' r='2' />
          <circle cx='812.5' cy='256.5' r='1' />
          <circle cx='766.5' cy='281.5' r='1.5' />
          <circle cx='1510' cy='17' r='2' />
          <circle cx='1516.5' cy='20.5' r='2.5' />
          <circle cx='1457' cy='200' r='2' />
          <circle cx='1431.5' cy='75.5' r='1.5' />
          <circle cx='1420.5' cy='89.5' r='1.5' />
          <circle cx='1357.5' cy='43.5' r='1' />
          <circle cx='1310.5' cy='70.5' r='1.5' />
          <circle cx='805.5' cy='474.5' r='2.5' />
          <circle cx='1490' cy='409' r='2' />
          <circle cx='1508.5' cy='356.5' r='1.5' />
          <circle cx='1072.5' cy='334.5' r='1.5' />
          <circle cx='1109' cy='417' r='2' />
          <circle cx='1207' cy='446' r='2' />
          <circle cx='1266' cy='431' r='2' />
          <circle cx='1234.5' cy='523.5' r='2.5' />
          <circle cx='1274' cy='505' r='2' />
          <circle cx='1403.5' cy='481.5' r='1.5' />
          <circle cx='1417' cy='525' r='2' />
          <circle cx='1251' cy='562' r='2' />
          <circle cx='1326' cy='578' r='2' />
          <circle cx='1417.5' cy='661.5' r='2.5' />
          <circle cx='1396' cy='696' r='2' />
          <circle cx='1427.5' cy='677.5' r='1.5' />
          <circle cx='1258.5' cy='643.5' r='1.5' />
          <circle cx='1343.5' cy='758.5' r='2.5' />
          <circle cx='1498' cy='673' r='2' />
          <circle cx='1529.5' cy='633.5' r='2.5' />
          <circle cx='1440.5' cy='575.5' r='1' />
          <circle cx='1306.5' cy='918.5' r='1.5' />
          <circle cx='1499' cy='911' r='2' />
          <circle cx='1467.5' cy='923.5' r='1.5' />
          <circle cx='1497' cy='1029' r='2' />
          <circle cx='1432.5' cy='1044.5' r='1.5' />
          <circle cx='824' cy='34' r='2' />
          <circle cx='602' cy='140' r='2' />
          <circle cx='640.5' cy='314.5' r='1.5' />
          <circle cx='606' cy='365' r='2' />
          <circle cx='466' cy='8' r='2' />
          <circle cx='576' cy='8' r='2' />
          <circle cx='552.5' cy='17.5' r='3.5' />
          <circle cx='464' cy='61' r='2' />
          <circle cx='218' cy='78' r='2' />
          <circle cx='419.5' cy='17.5' r='1.5' />
          <circle cx='461.5' cy='288.5' r='3.5' />
          <circle cx='440.5' cy='279.5' r='1.5' />
          <circle cx='386' cy='332' r='2' />
          <circle cx='404' cy='342' r='2' />
          <circle cx='378' cy='270' r='2' />
          <circle cx='362' cy='365' r='2' />
          <circle cx='373.5' cy='433.5' r='3.5' />
          <circle cx='511.5' cy='464.5' r='1.5' />
          <circle cx='627.5' cy='474.5' r='1.5' />
          <circle cx='644' cy='492' r='2' />
          <circle cx='117.5' cy='199.5' r='1.5' />
          <circle cx='118' cy='207' r='2' />
          <circle cx='89.5' cy='9.5' r='2.5' />
          <circle cx='110.5' cy='23.5' r='2.5' />
          <circle cx='196.5' cy='.5' r='1' />
          <circle cx='274' cy='12' r='2' />
          <circle cx='283' cy='60' r='2' />
          <circle cx='63.5' cy='127.5' r='2.5' />
          <circle cx='24' cy='60' r='2' />
          <circle cx='65.5' cy='35.5' r='1' />
          <circle cx='28' cy='163' r='2' />
          <circle cx='22.5' cy='204.5' r='2.5' />
          <circle cx='99' cy='268' r='4' />
          <circle cx='50.5' cy='228.5' r='1' />
          <circle cx='37.5' cy='257.5' r='1.5' />
          <circle cx='85' cy='291' r='2' />
          <circle cx='11.5' cy='47.5' r='1' />
          <circle cx='138' cy='426' r='4' />
          <circle cx='262.5' cy='486.5' r='3.5' />
          <circle cx='269.5' cy='452.5' r='1.5' />
          <circle cx='134.5' cy='547.5' r='2.5' />
          <circle cx='3.5' cy='560.5' r='3.5' />
          <circle cx='429.5' cy='573.5' r='1.5' />
          <circle cx='486' cy='564' r='2' />
          <circle cx='511' cy='597' r='2' />
          <circle cx='352.5' cy='635.5' r='3.5' />
          <circle cx='345' cy='709' r='2' />
          <circle cx='256.5' cy='776.5' r='3.5' />
          <circle cx='235.5' cy='811.5' r='3.5' />
          <circle cx='229.5' cy='664.5' r='1.5' />
          <circle cx='233.5' cy='746.5' r='1.5' />
          <circle cx='42.5' cy='811.5' r='2.5' />
          <circle cx='77.5' cy='980.5' r='2.5' />
          <circle cx='255' cy='938' r='2' />
          <circle cx='32.5' cy='938.5' r='3.5' />
          <circle cx='23.5' cy='1086.5' r='1.5' />
          <circle cx='108.5' cy='1238.5' r='3.5' />
          <circle cx='159.5' cy='1159.5' r='2.5' />
          <circle cx='90.5' cy='1192.5' r='1' />
          <circle cx='300.5' cy='1081.5' r='3.5' />
          <circle cx='388.5' cy='1154.5' r='3.5' />
          <circle cx='343' cy='1124' r='2' />
          <circle cx='467.5' cy='1072.5' r='1.5' />
          <circle cx='532.5' cy='1146.5' r='2.5' />
          <circle cx='555.5' cy='1153.5' r='2.5' />
          <circle cx='546.5' cy='1137.5' r='1' />
          <circle cx='318' cy='1199' r='4' />
          <circle cx='301.5' cy='1186.5' r='1.5' />
          <circle cx='408' cy='1230' r='2' />
          <circle cx='491.5' cy='1210.5' r='1' />
          <circle cx='565.5' cy='1178.5' r='1.5' />
          <circle cx='656.5' cy='1235.5' r='3.5' />
          <circle cx='709' cy='1285' r='2' />
          <circle cx='324.5' cy='1289.5' r='1.5' />
          <circle cx='332.5' cy='1278.5' r='1.5' />
          <circle cx='819.5' cy='1028.5' r='2.5' />
          <circle cx='875' cy='1157' r='2' />
          <circle cx='963.5' cy='1152.5' r='2.5' />
          <circle cx='962' cy='1145' r='2' />
          <circle cx='1069.5' cy='1181.5' r='11.5' />
          <circle cx='1003.5' cy='1152.5' r='2.5' />
          <circle cx='940.5' cy='1193.5' r='2.5' />
          <circle cx='907' cy='1068' r='2' />
          <circle cx='945' cy='925' r='2' />
          <circle cx='1204' cy='1186' r='2' />
          <circle cx='691.5' cy='848.5' r='1.5' />
          <circle cx='831' cy='1013' r='2' />
          <circle cx='833.5' cy='1082.5' r='2.5' />
          <circle cx='833' cy='1190' r='2' />
          <circle cx='1155.5' cy='1022.5' r='3.5' />
          <circle cx='908' cy='595' r='4' />
          <circle cx='1012.5' cy='528.5' r='3.5' />
          <circle cx='992.5' cy='547.5' r='1.5' />
          <circle cx='577' cy='960' r='2' />
          <circle cx='599.5' cy='939.5' r='1.5' />
          <circle cx='446' cy='959' r='2' />
          <circle cx='868' cy='534' r='2' />
          <circle cx='683.5' cy='574.5' r='1.5' />
          <circle cx='694.5' cy='526.5' r='1.5' />
          <circle cx='462.5' cy='659.5' r='3.5' />
          <circle cx='458.5' cy='738.5' r='1.5' />
          <circle cx='587' cy='764' r='2' />
          <circle cx='602.5' cy='690.5' r='2.5' />
          <circle cx='529.5' cy='669.5' r='1.5' />
          <circle cx='900.5' cy='851.5' r='3.5' />
          <circle cx='926.5' cy='796.5' r='3.5' />
          <circle cx='816' cy='823' r='2' />
          <circle cx='1003' cy='672' r='2' />
        </g>
      </svg>
      <div className={classes.content_wrapper}>
        <div className={classes.info_header}>
          <ul>
            <li
              style={{
                borderBottom: `2px solid ${
                  activeInfo === "OVERVIEW" ? color : "transparent"
                }`,
              }}
              onClick={() => setActiveInfo("OVERVIEW")}>
              OVERVIEW
            </li>
            <li
              style={{
                borderBottom: `2px solid ${
                  activeInfo === "STRUCTURE" ? color : "transparent"
                }`,
              }}
              onClick={() => setActiveInfo("STRUCTURE")}>
              STRUCTURE
            </li>
            <li
              style={{
                borderBottom: `2px solid ${
                  activeInfo === "SURFACE" ? color : "transparent"
                }`,
              }}
              onClick={() => setActiveInfo("SURFACE")}>
              SURFACE
            </li>
          </ul>
        </div>
        <div className={classes.img_and_description_and_details}>
          <div className={classes.main_img_cont}>
            <img
              className={classes.main_planet_img}
              src={
                activeInfo === "OVERVIEW"
                  ? planets[planetIndex].images.planet
                  : activeInfo === "STRUCTURE"
                  ? planets[planetIndex].images.internal
                  : planets[planetIndex].images.planet
              }
              alt='mars'
            />
            <img
              className={classes.surface}
              src={
                activeInfo === "SURFACE"
                  ? planets[planetIndex].images.geology
                  : ""
              }
              alt=''
            />
          </div>
          <div className={classes.name_description_source_details}>
            <div className={classes.name_description_source}>
              <div className={classes.name_and_description}>
                <h1 className={classes.name}>{planets[planetIndex].name}</h1>
                <p className={classes.description}>
                  {activeInfo === "OVERVIEW"
                    ? planets[planetIndex].overview.content
                    : activeInfo === "STRUCTURE"
                    ? planets[planetIndex].structure.content
                    : activeInfo === "SURFACE"
                    ? planets[planetIndex].geology.content
                    : ""}
                </p>
              </div>
              <div className={classes.source}>
                <p className={classes.source_title}>Source :</p>
                <a
                  className={classes.source_link}
                  target='_blank'
                  rel='noopener'
                  href={planets[planetIndex].overview.source}>
                  Wikipedia
                  <img src={"../../assets/toparrow.svg"} alt='toparrow' />
                </a>
              </div>
            </div>
            <ul className={classes.desktop_details_menu}>
              <li
                style={{
                  background: ` ${activeInfo === "OVERVIEW" ? color : ""}`,
                }}
                onClick={() => setActiveInfo("OVERVIEW")}>
                <span>01</span> OVERVIEW
              </li>
              {/* //////////////// */}
              <li
                style={{
                  background: ` ${
                    activeInfo === "STRUCTURE" ? color : "transparent"
                  }`,
                }}
                onClick={() => setActiveInfo("STRUCTURE")}>
                <span>02</span> INTERNAL STRUCTURE
              </li>
              {/* //////////////// */}
              <li
                style={{
                  background: ` ${
                    activeInfo === "SURFACE" ? color : "transparent"
                  }`,
                }}
                onClick={() => setActiveInfo("SURFACE")}>
                <span>03</span> SURFACE GEOLOGY
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.detail_info_cont}>
          <div className={classes.info}>
            <p>ROTATION TIME</p>
            <span>{planets[planetIndex].rotation}</span>
          </div>
          {/* //////// */}
          <div className={classes.info}>
            <p>REVOLUTION TIME</p>
            <span>{planets[planetIndex].revolution}</span>
          </div>
          {/* /////////////// */}
          <div className={classes.info}>
            <p>RADIUS</p>
            <span>{planets[planetIndex].radius}</span>
          </div>
          {/* ///////////////// */}
          <div className={classes.info}>
            <p>AVERAGE TEMP.</p>
            <span>{planets[planetIndex].temperature}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
