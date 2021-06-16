<?php

namespace App\Events;

use App\Models\Prova;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ProveEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $prova;

    /**
     * Create a new event instance.
     *
     * @param Prova $prova
     */
    public function __construct(Prova $prova)
    {
        $this->prova = $prova;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('provaChannel');
    }

    public function broadcastAs(){
        return 'task-created';
    }
}
