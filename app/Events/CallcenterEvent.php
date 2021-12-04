<?php

namespace App\Events;

use App\Models\Appuntamento;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CallcenterEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $appuntamento;

    /**
     * Create a new event instance.
     *
     * @param Appuntamento $appuntamento
     */
    public function __construct(Appuntamento $appuntamento)
    {
        $this->appuntamento = $appuntamento;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('appuntamentoChannel');
    }

    public function broadcastAs(){
        return 'task-created';
    }
}
