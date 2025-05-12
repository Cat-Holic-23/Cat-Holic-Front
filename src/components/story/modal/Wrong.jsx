export default function WrongModal({ onContinue }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">WRONG!</h2>
        <p className="mb-4">aI 연결</p>
        <button
          onClick={onContinue}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
