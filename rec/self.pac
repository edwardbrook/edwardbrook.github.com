var proxy_host=[
	"203.104.209.7","203.104.209.71","203.104.209.87","125.6.184.215","203.104.209.183","203.104.209.150","203.104.209.134",
            "203.104.209.167","203.104.248.135","125.6.189.7","125.6.189.39","125.6.189.71","125.6.189.103","125.6.189.135","125.6.189.167","125.6.189.215","125.6.189.247","203.104.209.23","203.104.209.39","g.e-hentai.org","e-hentai.org","fc2.com","fc2cn.com","dmm.com","www.dmm.co.jp","my.dmm.co.jp","osapi.dmm.co.jp","sp.dmm.co.jp","point.dmm.co.jp","dlcp2.dmm.co.jp",
            "book.dmm.co.jp",
            "dlsoft.dmm.co.jp","gree.net","gree-pf.net","exhentai.org","app.kanpani.jp","img.kanpani.jp","img2.kanpani.jp","img3.kanpani.jp","img4.kanpani.jp","img5.kanpani.jp","www.kanpani.jp","www2.kanpani.jp","www3.kanpani.jp","www4.kanpani.jp","www5.kanpani.jp","login.kanpani.jp","www2-2.kanpani.jp","mh-m.jp","203.104.209.55","touken-ranbu.jp","dovs9u514acja.cloudfront.net","web.flower-knight-girls.co.jp","flower-help.s3-website-ap-northeast-1.amazonaws.com","kancolle-db.net","res.nimg.jp","203.104.209.102","millennium-war.net","ladsp.com","adclr.jp","spdmg-backend.i-mobile.co.jp","spcnv.i-mobile.co.jp","flower-knight-girl.cdn.dmmgames.com","aigis.gcwiki.info","nekopanda.blog.jp",
	"axis-i.smq.jp","axis-w.smq.jp","axis-a.smq.jp","senpro.dmmgames.com","img-r18-senpro.cdn.dmmgames.com","assets.shiropro-re.net","api.shiropro-re.net","granbluefantasy.jp","www.itchibanketsu.jp","asset.itchibanketsu.jp","img.itchibanketsu.jp","ujj.co.jp","d3v6wpctnoruyf.cloudfront.net","r.muvluv-sf.com","rcv.ixd.dmm.co.jp","pc-play.games.dmm.co.jp","pics.dmm.co.jp","p.dmm.co.jp","games.dmm.co.jp","personal.games.dmm.co.jp","avatar.games.dmm.co.jp","bungo.dmmgames.com","210.140.108.205","yashiro.dmmgames.com","d2l18yyka3zu4o.cloudfront.net","db695krnj9c0z.cloudfront.net","tumblr.com","cache.girls-odyssey.com","app.girls-odyssey.com","203.104.248.5","accounts.dmm.co.jp","image01.seesaawiki.jp","image02.seesaawiki.jp","connect.mobage.jp","danbooru.donmai.us","r.aimia.dmmgames.com","r.cdn.aimia.dmmgames.com","cdn-connect.mobage.jp","pc-x.phantom-greed.com","sukebei.nyaa.si",
	"cache.re-bless.jp","game.re-bless.jp","d3931by0sn18hk.cloudfront.net","devil-owl.com","hpw.himegari.com","hpa.himegari.com","himegari.cdn.dmmgames.com","a.school-alchemist.com","game.school-alchemist.com","cf.r.skh.dmmgames.com","cf.static.r.skh.dmmgames.com",
	"fkg.dmmgames.com","cf.fkg.dmmgames.com","assets.smrtbeat.com","control.smbeat.jp","rel-web1.sys.jewepri.com","rel-res1.sys.jewepri.com",
];
function FindProxyForURL(url, host) {
    for(var i=0;i<proxy_host.length;i++){
		var ph=proxy_host[i];
		if(ph===host||new RegExp("\\."+ph + "$").test(host)){
			return "PROXY 127.0.0.1:8123";
		}
	}
    return "DIRECT";
}
