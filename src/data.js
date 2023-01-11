const data = [
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463538/dag-photos/53_sjwniz.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463538/dag-photos/47_tl2icp.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463536/dag-photos/52_c8ov2y.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463535/dag-photos/46_otswti.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463535/dag-photos/3_szbapx.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463534/dag-photos/45_azpziu.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463534/dag-photos/1_jxhxrt.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463533/dag-photos/51_oal3ed.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463532/dag-photos/41_pk4ary.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463532/dag-photos/50_ra8jzp.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463531/dag-photos/56_sunf5h.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463531/dag-photos/44_vljfwn.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463531/dag-photos/2_kbkg1g.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463530/dag-photos/57_hzdntm.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463530/dag-photos/54_wf1fkv.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463530/dag-photos/40_bc9syw.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463528/dag-photos/6_gxkw2b.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463526/dag-photos/5_fnwtig.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463526/dag-photos/7_nnhyxw.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463526/dag-photos/55_awmr85.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463521/dag-photos/25_oa4ztz.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463521/dag-photos/43_ukkvcv.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463520/dag-photos/19_en6yna.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463520/dag-photos/4_erby0d.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463520/dag-photos/42_aq1ldb.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463519/dag-photos/18_wtkl2k.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463519/dag-photos/49_akovnt.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463518/dag-photos/30_psyxd5.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463518/dag-photos/31_fhfv3z.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463517/dag-photos/32_eyfumy.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463517/dag-photos/24_qmzgey.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463515/dag-photos/27_fkkgwc.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463515/dag-photos/26_ys4ud8.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463514/dag-photos/23_hexc4t.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463514/dag-photos/33_srvoft.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463514/dag-photos/37_uw8lk2.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463513/dag-photos/22_p3fzfb.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463512/dag-photos/34_pppqbw.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463512/dag-photos/36_i6fz0x.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463512/dag-photos/20_jvwuvf.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463511/dag-photos/38_zblbtu.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463511/dag-photos/39_b4q3qi.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463511/dag-photos/35_dumadp.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463510/dag-photos/21_eo4fzz.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463509/dag-photos/10_je2su5.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463508/dag-photos/12_istpc2.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463508/dag-photos/11_pcoypg.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463507/dag-photos/13_zapdjs.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463507/dag-photos/16_scu5mb.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463507/dag-photos/17_ot4gza.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463506/dag-photos/9_cgceqp.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463506/dag-photos/28_cxecea.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463506/dag-photos/15_kk6km0.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463506/dag-photos/64_y08ldn.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463505/dag-photos/29_wzoue1.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463504/dag-photos/8_mmnasl.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463504/dag-photos/14_cjtb3m.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463502/dag-photos/58_jorf3d.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463502/dag-photos/62_hcefhx.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463501/dag-photos/60_y5c0jp.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463500/dag-photos/59_kva41w.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463500/dag-photos/63_ubztmo.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463499/dag-photos/48_o2rw69.jpg',
    'https://res.cloudinary.com/dvqorjxqx/image/upload/v1673463499/dag-photos/61_d23olc.jpg'
]

export default data