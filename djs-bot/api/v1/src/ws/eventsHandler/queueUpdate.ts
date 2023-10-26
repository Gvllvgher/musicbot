import { ESocketEventType } from '../../interfaces/wsShared';
import { createEventPayload, getPlayerQueue, wsPublish } from '../../utils/ws';

// this is hilarious
import { IHandleQueueUpdateParams } from '../../../../../lib/MusicEvents.d';

export default function handleQueueUpdate({
  guildId,
  player,
}: IHandleQueueUpdateParams) {
  if (!guildId?.length) throw new TypeError('Missing guildId');
  if (!player?.queue) throw new TypeError('Missing player queue');

  const to = 'player/' + guildId;
  const d = createEventPayload(
    ESocketEventType.GET_QUEUE,
    getPlayerQueue(player),
  );

  // !TODO: debug log, remove when done
  console.log({ publish: to, d });

  wsPublish(to, d);
}