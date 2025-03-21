const canvas = document.getElementById("quantumCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

function quantumPotential(x, a = 5, b = 3) {
    return a * Math.sin(b * x) + Math.cos(a * x * b / Math.PI);
}

function waveFunction(x, n = 2) {
    return Math.exp(-x * x / 2) * Math.sin(n * x) + Math.cos(n * x);
}

function drawQuantumChaos(iterations = 500) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let i = 0; i < iterations; i++) {
        let x = (i / iterations) * 20 - 10;
        let y = quantumPotential(x) * 20 + 200;
        ctx.lineTo(i * (canvas.width / iterations), canvas.height - y);
    }

    ctx.strokeStyle = "#0f0";
    ctx.stroke();
}

function startSimulation() {
    drawQuantumChaos();
    console.log("💥 Quantum Chaos Simulation Activated!");
}
