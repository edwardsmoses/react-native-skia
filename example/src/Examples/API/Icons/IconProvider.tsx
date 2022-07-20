import type { SkPicture } from "@shopify/react-native-skia";
import { rect, Skia } from "@shopify/react-native-skia";
import type { ReactNode } from "react";
import React, { useContext, useEffect, createContext } from "react";
import { Image } from "react-native";

const iconsToLoad = {
  activity: require("./feather/activity.svg"),
  airplay: require("./feather/airplay.svg"),
  "alert-circle": require("./feather/alert-circle.svg"),
  "alert-octagon": require("./feather/alert-octagon.svg"),
  "alert-triangle": require("./feather/alert-triangle.svg"),
  "align-center": require("./feather/align-center.svg"),
  "align-justify": require("./feather/align-justify.svg"),
  "align-left": require("./feather/align-left.svg"),
  "align-right": require("./feather/align-right.svg"),
  anchor: require("./feather/anchor.svg"),
  archive: require("./feather/archive.svg"),
  "at-sign": require("./feather/at-sign.svg"),
  award: require("./feather/award.svg"),
  aperture: require("./feather/aperture.svg"),
  "bar-chart": require("./feather/bar-chart.svg"),
  "bar-chart-2": require("./feather/bar-chart-2.svg"),
  battery: require("./feather/battery.svg"),
  "battery-charging": require("./feather/battery-charging.svg"),
  bell: require("./feather/bell.svg"),
  "bell-off": require("./feather/bell-off.svg"),
  bluetooth: require("./feather/bluetooth.svg"),
  "book-open": require("./feather/book-open.svg"),
  book: require("./feather/book.svg"),
  bookmark: require("./feather/bookmark.svg"),
  box: require("./feather/box.svg"),
  briefcase: require("./feather/briefcase.svg"),
  calendar: require("./feather/calendar.svg"),
  camera: require("./feather/camera.svg"),
  cast: require("./feather/cast.svg"),
  "chevron-down": require("./feather/chevron-down.svg"),
  "chevron-up": require("./feather/chevron-up.svg"),
  circle: require("./feather/circle.svg"),
  clipboard: require("./feather/clipboard.svg"),
  clock: require("./feather/clock.svg"),
  "cloud-drizzle": require("./feather/cloud-drizzle.svg"),
  "cloud-lightning": require("./feather/cloud-lightning.svg"),
  "cloud-rain": require("./feather/cloud-rain.svg"),
  "cloud-snow": require("./feather/cloud-snow.svg"),
  cloud: require("./feather/cloud.svg"),
  codepen: require("./feather/codepen.svg"),
  codesandbox: require("./feather/codesandbox.svg"),
  code: require("./feather/code.svg"),
  coffee: require("./feather/coffee.svg"),
  columns: require("./feather/columns.svg"),
  command: require("./feather/command.svg"),
  compass: require("./feather/compass.svg"),
  copy: require("./feather/copy.svg"),
  "corner-down-left": require("./feather/corner-down-left.svg"),
  "corner-down-right": require("./feather/corner-down-right.svg"),
  "corner-left-down": require("./feather/corner-left-down.svg"),
  "corner-left-up": require("./feather/corner-left-up.svg"),
  "corner-right-down": require("./feather/corner-right-down.svg"),
  "corner-right-up": require("./feather/corner-right-up.svg"),
  "corner-up-left": require("./feather/corner-up-left.svg"),
  "corner-up-right": require("./feather/corner-up-right.svg"),
  cpu: require("./feather/cpu.svg"),
  "credit-card": require("./feather/credit-card.svg"),
  crop: require("./feather/crop.svg"),
  crosshair: require("./feather/crosshair.svg"),
  database: require("./feather/database.svg"),
  delete: require("./feather/delete.svg"),
  disc: require("./feather/disc.svg"),
  "dollar-sign": require("./feather/dollar-sign.svg"),
  droplet: require("./feather/droplet.svg"),
  edit: require("./feather/edit.svg"),
  "edit-2": require("./feather/edit-2.svg"),
  "edit-3": require("./feather/edit-3.svg"),
  eye: require("./feather/eye.svg"),
  "eye-off": require("./feather/eye-off.svg"),
  "external-link": require("./feather/external-link.svg"),
  facebook: require("./feather/facebook.svg"),
  "fast-forward": require("./feather/fast-forward.svg"),
  figma: require("./feather/figma.svg"),
  "file-minus": require("./feather/file-minus.svg"),
  "file-plus": require("./feather/file-plus.svg"),
  "file-text": require("./feather/file-text.svg"),
  film: require("./feather/film.svg"),
  filter: require("./feather/filter.svg"),
  flag: require("./feather/flag.svg"),
  "folder-minus": require("./feather/folder-minus.svg"),
  "folder-plus": require("./feather/folder-plus.svg"),
  folder: require("./feather/folder.svg"),
  framer: require("./feather/framer.svg"),
  frown: require("./feather/frown.svg"),
  gift: require("./feather/gift.svg"),
  "git-branch": require("./feather/git-branch.svg"),
  "git-commit": require("./feather/git-commit.svg"),
  "git-merge": require("./feather/git-merge.svg"),
  "git-pull-request": require("./feather/git-pull-request.svg"),
  github: require("./feather/github.svg"),
  gitlab: require("./feather/gitlab.svg"),
  globe: require("./feather/globe.svg"),
  "hard-drive": require("./feather/hard-drive.svg"),
  hash: require("./feather/hash.svg"),
  headphones: require("./feather/headphones.svg"),
  heart: require("./feather/heart.svg"),
  "help-circle": require("./feather/help-circle.svg"),
  hexagon: require("./feather/hexagon.svg"),
  home: require("./feather/home.svg"),
  image: require("./feather/image.svg"),
  inbox: require("./feather/inbox.svg"),
  instagram: require("./feather/instagram.svg"),
  key: require("./feather/key.svg"),
  layers: require("./feather/layers.svg"),
  layout: require("./feather/layout.svg"),
  link: require("./feather/link.svg"),
  "link-2": require("./feather/link-2.svg"),
  linkedin: require("./feather/linkedin.svg"),
  list: require("./feather/list.svg"),
  lock: require("./feather/lock.svg"),
  "log-in": require("./feather/log-in.svg"),
  "log-out": require("./feather/log-out.svg"),
  mail: require("./feather/mail.svg"),
  "map-pin": require("./feather/map-pin.svg"),
  map: require("./feather/map.svg"),
  maximize: require("./feather/maximize.svg"),
  "maximize-2": require("./feather/maximize-2.svg"),
  meh: require("./feather/meh.svg"),
  menu: require("./feather/menu.svg"),
  "message-circle": require("./feather/message-circle.svg"),
  "message-square": require("./feather/message-square.svg"),
  "mic-off": require("./feather/mic-off.svg"),
  mic: require("./feather/mic.svg"),
  minimize: require("./feather/minimize.svg"),
  "minimize-2": require("./feather/minimize-2.svg"),
  minus: require("./feather/minus.svg"),
  monitor: require("./feather/monitor.svg"),
  moon: require("./feather/moon.svg"),
  "more-horizontal": require("./feather/more-horizontal.svg"),
  "more-vertical": require("./feather/more-vertical.svg"),
  "mouse-pointer": require("./feather/mouse-pointer.svg"),
  move: require("./feather/move.svg"),
  music: require("./feather/music.svg"),
  navigation: require("./feather/navigation.svg"),
  "navigation-2": require("./feather/navigation-2.svg"),
  octagon: require("./feather/octagon.svg"),
  package: require("./feather/package.svg"),
  paperclip: require("./feather/paperclip.svg"),
  pause: require("./feather/pause.svg"),
  "pause-circle": require("./feather/pause-circle.svg"),
  "pen-tool": require("./feather/pen-tool.svg"),
  percent: require("./feather/percent.svg"),
  "phone-call": require("./feather/phone-call.svg"),
  "phone-forwarded": require("./feather/phone-forwarded.svg"),
  "phone-incoming": require("./feather/phone-incoming.svg"),
  "phone-missed": require("./feather/phone-missed.svg"),
  "phone-off": require("./feather/phone-off.svg"),
  "phone-outgoing": require("./feather/phone-outgoing.svg"),
  phone: require("./feather/phone.svg"),
  play: require("./feather/play.svg"),
  "pie-chart": require("./feather/pie-chart.svg"),
  "play-circle": require("./feather/play-circle.svg"),
  plus: require("./feather/plus.svg"),
  "plus-circle": require("./feather/plus-circle.svg"),
  "plus-square": require("./feather/plus-square.svg"),
  pocket: require("./feather/pocket.svg"),
  power: require("./feather/power.svg"),
  printer: require("./feather/printer.svg"),
  radio: require("./feather/radio.svg"),
  "refresh-cw": require("./feather/refresh-cw.svg"),
  "refresh-ccw": require("./feather/refresh-ccw.svg"),
  repeat: require("./feather/repeat.svg"),
  rewind: require("./feather/rewind.svg"),
  "rotate-ccw": require("./feather/rotate-ccw.svg"),
  "rotate-cw": require("./feather/rotate-cw.svg"),
  rss: require("./feather/rss.svg"),
  save: require("./feather/save.svg"),
  scissors: require("./feather/scissors.svg"),
  search: require("./feather/search.svg"),
  send: require("./feather/send.svg"),
  settings: require("./feather/settings.svg"),
  "share-2": require("./feather/share-2.svg"),
  shield: require("./feather/shield.svg"),
  "shield-off": require("./feather/shield-off.svg"),
  "shopping-bag": require("./feather/shopping-bag.svg"),
  "shopping-cart": require("./feather/shopping-cart.svg"),
  shuffle: require("./feather/shuffle.svg"),
  "skip-back": require("./feather/skip-back.svg"),
  "skip-forward": require("./feather/skip-forward.svg"),
  slack: require("./feather/slack.svg"),
  slash: require("./feather/slash.svg"),
  sliders: require("./feather/sliders.svg"),
  smartphone: require("./feather/smartphone.svg"),
  smile: require("./feather/smile.svg"),
  speaker: require("./feather/speaker.svg"),
  star: require("./feather/star.svg"),
  "stop-circle": require("./feather/stop-circle.svg"),
  sun: require("./feather/sun.svg"),
  sunrise: require("./feather/sunrise.svg"),
  sunset: require("./feather/sunset.svg"),
  tablet: require("./feather/tablet.svg"),
  tag: require("./feather/tag.svg"),
  target: require("./feather/target.svg"),
  terminal: require("./feather/terminal.svg"),
  thermometer: require("./feather/thermometer.svg"),
  "thumbs-down": require("./feather/thumbs-down.svg"),
  "thumbs-up": require("./feather/thumbs-up.svg"),
  "toggle-left": require("./feather/toggle-left.svg"),
  "toggle-right": require("./feather/toggle-right.svg"),
  tool: require("./feather/tool.svg"),
  trash: require("./feather/trash.svg"),
  "trash-2": require("./feather/trash-2.svg"),
  triangle: require("./feather/triangle.svg"),
  truck: require("./feather/truck.svg"),
  tv: require("./feather/tv.svg"),
  twitch: require("./feather/twitch.svg"),
  twitter: require("./feather/twitter.svg"),
  type: require("./feather/type.svg"),
  umbrella: require("./feather/umbrella.svg"),
  unlock: require("./feather/unlock.svg"),
  "user-check": require("./feather/user-check.svg"),
  "user-minus": require("./feather/user-minus.svg"),
  "user-plus": require("./feather/user-plus.svg"),
  "user-x": require("./feather/user-x.svg"),
  user: require("./feather/user.svg"),
  users: require("./feather/users.svg"),
  "video-off": require("./feather/video-off.svg"),
  video: require("./feather/video.svg"),
  voicemail: require("./feather/voicemail.svg"),
  volume: require("./feather/volume.svg"),
  "volume-1": require("./feather/volume-1.svg"),
  "volume-2": require("./feather/volume-2.svg"),
  "volume-x": require("./feather/volume-x.svg"),
  watch: require("./feather/watch.svg"),
  "wifi-off": require("./feather/wifi-off.svg"),
  wifi: require("./feather/wifi.svg"),
  wind: require("./feather/wind.svg"),
  "x-circle": require("./feather/x-circle.svg"),
  "x-octagon": require("./feather/x-octagon.svg"),
  "x-square": require("./feather/x-square.svg"),
  x: require("./feather/x.svg"),
  youtube: require("./feather/youtube.svg"),
  "zap-off": require("./feather/zap-off.svg"),
  zap: require("./feather/zap.svg"),
  "zoom-in": require("./feather/zoom-in.svg"),
  "zoom-out": require("./feather/zoom-out.svg"),
};
type IconName = keyof typeof iconsToLoad;

const boundingRect = rect(0, 0, 64, 64);

const resolveAsset = async (
  name: IconName,
  asset: ReturnType<typeof require>
) => {
  const data = await Skia.Data.fromURI(Image.resolveAssetSource(asset).uri);
  return {
    name,
    svg: Skia.SVG.MakeFromData(data)!,
  };
};

type IconContext = {
  [name in IconName]: SkPicture;
};

const IconContext = createContext<IconContext | null>(null);

interface IconProviderProps {
  children: ReactNode;
}

const mapKeys = <T,>(obj: T) => Object.keys(obj) as (keyof T)[];

export const useIcons = () => {
  const icons = useContext(IconContext);
  if (!icons) {
    throw new Error("Could not find the icon provider");
  }
  return icons;
};

export const IconProvider = ({ children }: IconProviderProps) => {
  const [icons, setIcons] = React.useState<IconContext | null>(null);
  useEffect(() => {
    (async () => {
      const newIcons: { [name: string]: SkPicture } = {};
      const assets = await Promise.all([
        ...mapKeys(iconsToLoad).map((name) =>
          resolveAsset(name, iconsToLoad[name])
        ),
      ]);
      assets.forEach(({ name, svg }) => {
        const recorder = Skia.PictureRecorder();
        const canvas = recorder.beginRecording(boundingRect);
        canvas.drawSvg(svg);
        const picture = recorder.finishRecordingAsPicture();
        newIcons[name] = picture;
      });
      setIcons(newIcons as IconContext);
    })();
  }, []);
  if (icons === null) {
    return null;
  }
  return <IconContext.Provider value={icons}>{children}</IconContext.Provider>;
};
