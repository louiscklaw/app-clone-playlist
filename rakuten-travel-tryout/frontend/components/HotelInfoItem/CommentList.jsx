import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import CircularProgressWithLabel from 'components/CircularProgressWithLabel';
import color from 'pages/hkg/zh-hk/color';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ShareIcon from '@mui/icons-material/Share';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LanguageIcon from '@mui/icons-material/Language';
import MarkRow from 'components/MarkRow';
import { useState } from 'react';

export default ({ sx, comment }) => {
  let [expand, setExpand] = useState(false);

  // // let comment = `今回年末年始で4連泊したのですが、
  // // 調理用具、洗濯機、乾燥機など全て揃っており、無いものがなかったくらい充実してました。子供のおもちゃの乾電池もあるかどうか聞いてみたら持ってきて下さいました！すごい！
  // // 年末ということで、宮古ソーキソバやシャンパン、メロン(最高級に美味)も用意してくだり、年始ということで鏡餅やお花をお部屋に飾ってくれたりと、最高でした。
  // // ちなみに冷蔵庫のピールやドリンクは無料で追加もできます。個人的にはシークワサーのバヤリースが沖縄限定で美味しかったので追加しました。
  // // 置いているアメニティや、洗顔、化粧品なども、良いものを使っており、高級宿の感じを受けます。
  // // 温水プールもあるヴィラでしたが、こちらは年末年始の時期なのに、日中は入れましたし子供が喜んでました。
  // // ただ、夏なら夜まで入れたのになーと少し時期的に残念。
  // // 宿泊代は高級ですが、その価値に見合ったサービスではないでしょうか。 大変有意義な休日旅行となりました。
  // // ありがとうございました。 また今度は夏休みにリピートしたいです。`;

  let { content, reply } = comment;
  let short_content = content.split('').slice(0, 90).join('');

  if (!comment) return <>loading</>;

  return (
    <>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div class="row">
            <Typography variant="subtitle1" fontWeight="bold">
              {comment.name} |
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {comment.location} |
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {comment.age} |
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {comment.type}
            </Typography>
          </div>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <div>
              <CircularProgressWithLabel value={5} />
            </div>
            <Typography variant="body2" fontWeight="bold" color={color.textDeepGrey}>
              發布日：{comment.date}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
          {expand ? content : `${short_content}...`}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button>回報</Button>
          <Button>1 人認為有幫助</Button>
        </Stack>

        {expand ? (
          <>
            <Stack direction="column" spacing={1}>
              <Stack direction="column" spacing={1} sx={{ paddingTop: '1rem', paddingBottom: '1rem', width: '50%' }}>
                <MarkRow text={'地點'} value={5} />
                <MarkRow text={'設施與設備'} value={1} />
                <MarkRow text={'服務與工作人員'} value={2} />
                <MarkRow text={'舒適與整潔度'} value={3} />
                <MarkRow text={'浴缸'} value={4} />
                <MarkRow text={'餐食'} value={5} />
              </Stack>
              {reply.map((r, i) => (
                <>
                  <Stack
                    direction="column"
                    sx={{ backgroundColor: color.lightLightGrey, padding: '1rem', borderRadius: '10px' }}
                    spacing={2}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      住宿回覆
                    </Typography>
                    <Typography>{r.content}</Typography>
                    <Typography>{r.author}</Typography>
                    <div style={{ textAlign: 'right' }}>
                      <Typography variant="body2" color={color.textDeepGrey}>
                        發布日： {r.date}
                      </Typography>
                    </div>
                  </Stack>
                </>
              ))}
            </Stack>
          </>
        ) : (
          <></>
        )}

        <Button onClick={e => setExpand(!expand)}>{expand ? <>隱藏部分</> : <>顯示更多</>}</Button>
      </Stack>
    </>
  );
};
