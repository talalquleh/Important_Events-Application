<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'note' => $this->faker->sentence(),
            'place' => $this->faker->numerify('PC-lab-##'),
            'date' => $this->faker->date('Y-m-d'),
        ];
    }
}
