import { objectType } from "nexus";

export const Highlight = objectType({
  name: "Highlight",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.type();
    t.model.videoIdApi();
    t.model.title();
    t.model.blurb();
    t.model.description();
    t.model.duration();
    t.model.mediaPlaybackIdApi();
    t.model.eventIdApi();
    t.model.game();
    t.model.gameId();
    t.model.team();
    t.model.teamId();
    t.model.opponent();
    t.model.opponentId();
    t.model.highlightMeta();
    t.model.playbacks();
    t.model.comments();
    t.model.likedBy();
  },
});
